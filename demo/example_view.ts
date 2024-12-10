// Copyright 2024 DeepMind Technologies Limited
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ==============================================================================

/**
 * Display for TDA examples (query and proponents/opponents).
 */

import '@material/web/icon/icon';

// tslint:disable:no-new-decorators
import {MobxLitElement} from '@adobe/lit-mobx';
import {html, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {observable, reaction} from 'mobx';

import {styles as appStyles} from './app.css';
import {styles as litStyles} from './elements/shared_styles.css';
import {styles} from './example_view.css';
import {aisColor, SpanHighlightArray, stopPropagation, tagMatchingSpans,} from './utils';

/**
 * Generic example type.
 */
export interface TDAExample {
  // tslint:disable-next-line:no-any
  [key: string]: any;
}

/**
 * Example browser sidebar.
 *
 * Clicking an example raises example-clicked event, which can be used for
 * selection.
 */
@customElement('tda-example-view')
export class TDAExampleView extends MobxLitElement {
  static override get styles() {
    return [litStyles, appStyles, styles];
  }

  @property({type: Object}) example?: TDAExample;
  @property({type: Object}) sxsExample?: TDAExample;

  // Prompt and target strings for highlight matches in proponent text
  @observable highlightPrompt?: string;
  @observable highlightTarget?: string;

  @observable expandSamples = false;

  handleDocumentSelection: () => void;
  handleDocumentClick: () => void;

  constructor() {
    super();

    // If example changes, reset text highlights.
    reaction(
      () => this.example,
      () => {
        this.highlightPrompt = undefined;
        this.highlightTarget = undefined;
      },
    );

    // For prompt selection, we use the regular document text selection for
    // flexibility. If this is modified by clicking the prompt text in
    // .example-header, we handle it directly from mousedown/mouseup events.
    // But, if the selection is cleared by clicking somewhere else, we need
    // to make sure highlightPrompt is cleared as well.
    this.handleDocumentSelection = () => {
      const selectedText = document.getSelection()?.toString() ?? '';
      if (selectedText === '') {
        this.highlightPrompt = undefined;
      }
    };

    // For target highlighting, we match the selection behavior by also clearing
    // the highlight when the document is clicked.
    // To allow toggle on/off and independent selection of the prompt highlight,
    // we set @click=${stopPropagation} on .example-header below.
    this.handleDocumentClick = () => {
      this.highlightTarget = undefined;
    };
  }

  // See https://lit.dev/docs/v1/components/events/#add-event-listeners-in-connectedcallback
  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener('selectionchange', this.handleDocumentSelection);
    document.addEventListener('click', this.handleDocumentClick);
  }
  override disconnectedCallback() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener(
      'selectionchange',
      this.handleDocumentSelection,
    );
    super.disconnectedCallback();
  }

  renderDecoderSamples() {
    const label = this.example?.['8b_generations'] ? '8B Model Samples' :
                                                     'Decoder Samples';
    // Support older files that used 'temperature_samples' as the field name.
    const samples = this.example?.['8b_generations'] ??
        this.example?.['temperature_samples'] ?? [];
    if (samples.length === 0) {
      // prettier-ignore
      return html`
        <div class='example-samples'>
          <label>${label}</label>
          <div class='value value-missing'>undefined</div>
        </div>
      `;
    }

    const toggleExpandSamples = () => {
      this.expandSamples = !this.expandSamples;
    };

    // prettier-ignore
    return html`
      <div class='example-samples'>
        <label @click=${toggleExpandSamples}>${label}
          <span class='material-icon-outlined'>
            ${this.expandSamples ? 'unfold_less' : 'unfold_more'}
          </span>
        </label>
        <div class='value'>
          ${
        this.expandSamples ? samples.map((s: string) => html`${s}<br>`) :
                             samples.join(', ')}
        </div>
      </div>
    `;
  }

  renderQueryExample() {
    if (this.example == null) return null;

    const targetText = this.example['targets_plaintext'] ?? '';

    // Select variable prompt text using regular document text selection.
    // Trigger this below on mouseup / mousedown so that it is only triggered
    // when a selection is made within .example-header .prompt-text.
    const onSelectPrompt = () => {
      const selectedText = document.getSelection()?.toString() ?? '';
      if (selectedText === '') {
        this.highlightPrompt = undefined;
      } else {
        this.highlightPrompt = selectedText;
      }
    };

    // Select the whole target sequence, or toggle off.
    // TODO: consider supporting variable selection here too?
    const onClickHighlightTarget = () => {
      if (this.highlightTarget === targetText) {
        this.highlightTarget = undefined;
      } else {
        this.highlightTarget = targetText;
      }
    };

    const renderAttribute = (label: string, text?: string) => {
      const valueClass = classMap({
        'value': true,
        'value-missing': text == null,
      });
      // prettier-ignore
      return html`
        <div class='example-attribute'>
          <label>${label}</label>
          <div class=${valueClass}>${String(text)}</div>
        </div>
      `;
    };

    // Support older files that used 'is_correct' as the field name.
    const isCorrect =
        this.example['is_8b_correct'] ?? this.example['is_correct'];
    const correctnessText = isCorrect ? 'correct; ' : '';
    const confidenceLabel =
        this.example['8b_confidence'] ? '8B model confidence' : 'confidence';
    // Support older files that used 'model_confidence' as the field name.
    const confidenceScore =
        this.example['8b_confidence'] ?? this.example['model_confidence'];
    const confidenceText =
        confidenceScore != null ? Number(confidenceScore).toFixed(2) : 'N/A';
    const predictionText = `${targetText} (${correctnessText} ${
        confidenceLabel} = ${confidenceText})`;

    // Support older files that used 'fact_frequency' as the field name.
    const frequencyCount =
        this.example['c4_frequency'] ?? this.example['fact_frequency'];
    // Support older files that used 'frequency_bucket' as the field name.
    const frequencyBucket =
        this.example['c4_frequency_bucket'] ?? this.example['frequency_bucket'];
    const frequencyText = (frequencyCount ?? frequencyBucket) ?
        `${frequencyCount} (bucket ${frequencyBucket})` :
        undefined;

    // Support older files that used 'ground_truth' as the field name.
    const groundTruth =
        this.example['groundtruth'] ?? this.example['ground_truth'];

    const targetTextClass = classMap({
      'target-text': true,
      'target-highlight': this.highlightTarget === targetText,
    });

    // Simplified view for non-TREX tasks
    const isTrexTask = this.example['example_id']?.startsWith('trex') ||
        this.example['trex_id'] != null;
    if (!isTrexTask) {
      // prettier-ignore
      return html`
        <div class='query-example-container'>
          <div class='example-header' @click=${stopPropagation}>
            <strong>Query:</strong>
            <span class='prompt-text' @mousedown=${onSelectPrompt}
              @mouseup=${onSelectPrompt}>
              ${this.example['inputs_plaintext']}
            </span>
            <span class=${targetTextClass} @click=${onClickHighlightTarget}>
              ${targetText}
            </span>
          </div>
          <div class='data-grid example-grid example-grid-simplified'>
            ${
          this.example['example_id'] ?
              renderAttribute('Example ID', this.example['example_id']) :
              renderAttribute('TREX ID', this.example['trex_id'])}
            ${renderAttribute('Prompt', this.example['inputs_plaintext'])}
            ${renderAttribute('Prediction', predictionText)}
          </div>
        </div>
      `;
    }

    // prettier-ignore
    return html`
      <div class='query-example-container'>
        <div class='example-header' @click=${stopPropagation}>
          <strong>Query:</strong>
          <span class='prompt-text' @mousedown=${onSelectPrompt}
            @mouseup=${onSelectPrompt}>
            ${this.example['inputs_plaintext']}
          </span>
          <span class=${targetTextClass} @click=${onClickHighlightTarget}>
            ${targetText}
          </span>
        </div>
        <div class='data-grid example-grid'>
          ${
        this.example['example_id'] ?
            renderAttribute('Example ID', this.example['example_id']) :
            renderAttribute('TREX ID', this.example['trex_id'])}
          ${renderAttribute('Prompt', this.example['inputs_plaintext'])}
          ${renderAttribute('Prediction', predictionText)}
          ${renderAttribute('Ground Truth', groundTruth)}
          ${renderAttribute('Relation', this.example['relation'])}
          ${renderAttribute('C4 Fact Frequency', frequencyText)}
          ${
        renderAttribute('Has TREX Sentence', this.example['has_trex_sentence'])}
          ${this.renderDecoderSamples()}
        </div>
      </div>
    `;
  }

  renderIsCorrectAttribute(example: TDAExample, i: number) {
    const isCorrect = example['proponent_correct']?.[i];
    const scoreClass = classMap({
      'proponent-attribute': true,
      'proponent-correct': isCorrect ?? false,
    });

    const valueText = isCorrect == null ? 'N/A' : isCorrect ? '✓' : '-';

    // prettier-ignore
    return html`
      <div class=${scoreClass}>
        <label>Correct?</label>
        <div class='value numeric'>${valueText}</div>
      </div>
    `;
  }

  renderAisScoreAttribute(example: TDAExample, i: number) {
    const aisScore = example['proponent_ais_scores']?.[i] ?? 0;
    const aisStyle = styleMap({'background': aisColor(aisScore * 0.7)});

    const titleText = example['proponent_ais_best_windows']?.[i]
      ? `Best scoring window: "${example['proponent_ais_best_windows']?.[i]}"`
      : 'Score for entire passage.';
    const labelText = example['proponent_ais_best_windows']?.[i]
      ? 'AIS Score*'
      : 'AIS Score';

    // prettier-ignore
    return html`
      <div class='proponent-attribute' style=${aisStyle} title=${titleText}>
        <label>${labelText}</label>
        <div class='value numeric'>
          ${example['proponent_ais_scores']?.[i].toFixed(4) ?? '-'}
        </div>
      </div>
    `;
  }

  private renderProponents(example: TDAExample | undefined, isSxS = false) {
    if (example == null) return null;

    const numProponents = example['proponents']?.length ?? 0;

    const proponentMatchers: SpanHighlightArray = [
      [this.highlightPrompt, 'prompt-highlight'],
      [this.highlightTarget, 'target-highlight'],
    ];

    const renderedRows: TemplateResult[] = [];
    for (let i = 0; i < numProponents; i++) {
      const proponentText = example['proponents'][i];
      const proponentHTML = tagMatchingSpans(
        proponentText,
        proponentMatchers,
        'i',
      );

      const unfilteredRank = example['proponent_ranks']?.[i];
      const rankText =
        unfilteredRank != null ? `${i} (${unfilteredRank})` : `${i}`;

      const elementId = isSxS ? `proponent-sxs-${i}` : `proponent-${i}`;

      // prettier-ignore
      const row = html`
        <div class='data-grid proponent-grid' id=${elementId}>
          <div class='proponent-attribute'>
            <label>Rank</label>
            <div class='value numeric'>${rankText}</div>
          </div>
          <div class='proponent-attribute'>
            <label>TDA Score</label>
            <div class='value numeric'>${
          example['proponent_scores']?.[i].toFixed(4) ?? '-'}</div>
          </div>
          ${this.renderIsCorrectAttribute(example, i)}
          ${this.renderAisScoreAttribute(example, i)}
          <div class='proponent-text'>
            <label>Text</label>
            <div class='value'>${proponentHTML}</div>
          </div>
        </div>
      `;
      renderedRows.push(row);
    }

    // Render chips
    let renderedIsCorrectSelector: TemplateResult | null = null;
    if (example['proponent_correct'] != null) {
      const renderedIsCorrectChips: TemplateResult[] = [];
      for (let i = 0; i < numProponents; i++) {
        const onClickScrollTo = () => {
          const targetId = isSxS ? `proponent-sxs-${i}` : `proponent-${i}`;
          this.shadowRoot!.getElementById(targetId)?.scrollIntoView();
        };

        const proponentText = example['proponents'][i];
        const titleText = `[${i}]: ${proponentText}`;

        const isCorrect = example['proponent_correct']![i];
        const chipClasses = classMap({
          'proponent-chip': true,
          'proponent-correct': isCorrect,
        });

        // prettier-ignore
        const chip = html`
            <div class=${chipClasses}
              @click=${onClickScrollTo} title=${titleText}>
              ${isCorrect ? '✓' : '-'}
            </div>
          `;
        renderedIsCorrectChips.push(chip);
      }
      // prettier-ignore
      renderedIsCorrectSelector = html`
        <div class='chips-row'>
          <label>By correctness:</label>
          <div class='chips-holder'>
            ${renderedIsCorrectChips}
          </div>
        </div>
      `;
    }
    let renderedAisSelector: TemplateResult | null = null;
    if (example['proponent_ais_scores'] != null) {
      const renderedAisChips: TemplateResult[] = [];
      for (let i = 0; i < numProponents; i++) {
        const onClickScrollTo = () => {
          const targetId = isSxS ? `proponent-sxs-${i}` : `proponent-${i}`;
          this.shadowRoot!.getElementById(targetId)?.scrollIntoView();
        };

        const aisScore = example['proponent_ais_scores']?.[i];
        const chipStyle = styleMap({
          '--chip-color': aisColor((aisScore ?? 0) * 0.7),
        });

        const proponentText = example['proponents'][i];
        const titleText = `[${i}]: ${proponentText}`;

        // prettier-ignore
        const chip = html`
          <div class='proponent-chip' style=${chipStyle}
            @click=${onClickScrollTo} title=${titleText}>
            ${aisScore != null ? aisScore.toFixed(2) : '-'}
          </div>
        `;
        renderedAisChips.push(chip);
      }
      // prettier-ignore
      renderedAisSelector = html`
        <div class='chips-row'>
          <label>By AIS score:</label>
          <div class='chips-holder'>
            ${renderedAisChips}
          </div>
        </div>
      `;
    }

    const proponentListId = isSxS ? 'proponent-list-sxs' : 'proponent-list';

    const scrollToTop = () => {
      const elem = this.shadowRoot!.getElementById(proponentListId);
      elem!.scrollTop = 0;
    };

    const scrollToBottom = () => {
      const elem = this.shadowRoot!.getElementById(proponentListId);
      elem!.scrollTop = elem!.scrollHeight;
    };

    const title =
      this.sxsExample !== undefined
        ? isSxS
          ? 'Baseline'
          : 'Experiment'
        : 'Retrieved Proponents';

    // prettier-ignore
    return html`
      ${isSxS ? html`<div class='vbar'></div>` : null}
      <div class='proponents ${isSxS ? "sxs" : ""}'>
        <div class='proponents-header'>
          <div>${title}</div>
          <div class='selector-rows'>
            ${renderedIsCorrectSelector}
            ${renderedAisSelector}
          </div>
          <div class='flex-spacer'></div>
          <div class='scroll-controls'>
            <md-icon class='icon-button' @click=${scrollToTop}>
              vertical_align_top
            </md-icon>
            <md-icon class='icon-button' @click=${scrollToBottom}>
              vertical_align_bottom
            </md-icon>
          </div>
        </div>
        <div class='proponent-list' id=${proponentListId}>
          ${renderedRows}
        </div>
      </div>
    `;
  }

  override render() {
    if (this.example == null) return null;

    // prettier-ignore
    return html`
      <div class='outer-container'>
        ${this.renderQueryExample()}
        <div class='proponents-sxs-container'>
          ${this.renderProponents(this.example, false)}
          ${this.renderProponents(this.sxsExample, /* isSxs */ true)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tda-example-view': TDAExampleView;
  }
}
