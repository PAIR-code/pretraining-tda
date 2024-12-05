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
 * Index sidebar for TDA examples.
 */
import '@material/web/icon/icon';

// tslint:disable:no-new-decorators
import {MobxLitElement} from '@adobe/lit-mobx';
import {html, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {observable} from 'mobx';

import {styles as appStyles} from './app.css';
import {styles} from './data_index.css';
import {styles as litStyles} from './elements/shared_styles.css';
import {aisColor, mean, mrrColor} from './utils';

/**
 * Custom event for example-clicked
 */
export interface ExampleClicked {
  id: string;
}

/**
 * Index entry for an example.
 */
export interface ExampleInfo {
  id: string;
  displayName: string;
  description: string;
  task?: string;
  relation?: string;
  bestTDAScore?: number;
  bestAISScore?: number;
  hasTrexSentence?: boolean;
  metrics?: {[name: string]: number};
}

/**
 * Example browser sidebar.
 *
 * Clicking an example raises example-clicked event, which can be used for
 * selection.
 */
@customElement('tda-data-index')
export class TDADataIndex extends MobxLitElement {
  static override get styles() {
    return [litStyles, appStyles, styles];
  }

  @property({type: Number}) maxPerPage = 100;
  @property({type: String}) selectedId = '';

  @property({type: Array}) index: ExampleInfo[] = [];
  @observable pageStart = 0;

  @property({type: Boolean}) sorted = true;

  // Can't use @computed because it will not update properly when
  // this.index is updated. So, just a regular non-cached getter.
  get pageEnd(): number {
    return Math.min(this.pageStart + this.maxPerPage, this.index.length);
  }

  renderEntry(info: ExampleInfo) {
    const onClickEntry = () => {
      const event = new CustomEvent<ExampleClicked>('example-clicked', {
        detail: {id: info.id},
      });
      this.dispatchEvent(event);
    };

    // let tdaScoreChip: TemplateResult | null = null;
    // const tdaScore = info.bestTDAScore;
    // if (tdaScore) {
    //   // TODO(iftenney): find a more meaningful scale for these scores?
    //   const tdaStyle = styleMap({'background': tdaColor(tdaScore / 0.5)});
    //   // prettier-ignore
    //   tdaScoreChip = html`
    //     <div class='score-chip' style=${tdaStyle} title="Best TDA score">
    //       ${tdaScore.toFixed(2)}
    //     </div>
    //   `;
    // }

    let isCorrectChip: TemplateResult | null = null;
    if (info?.metrics?.['mrr_first'] != null) {
      const mrrFirst = info?.metrics?.['mrr_first'];
      const correctnessStyle = styleMap({
        'background': mrrColor(mrrFirst),
      });
      // prettier-ignore
      isCorrectChip = html`
        <div class='score-chip' style=${correctnessStyle} title="Best AIS score">
          r ${mrrFirst.toFixed(2)}
        </div>
      `;
    }

    let aisScoreChip: TemplateResult | null = null;
    const aisScore = info.bestAISScore;
    if (aisScore) {
      const aisStyle = styleMap({'background': aisColor(aisScore * 0.7)});
      // prettier-ignore
      aisScoreChip = html`
        <div class='score-chip' style=${aisStyle} title="Best AIS score">
          a ${aisScore.toFixed(2)}
        </div>
      `;
    }

    const classes = classMap({
      'index-entry': true,
      'selected': this.selectedId === info.id,
    });
    // prettier-ignore
    return html`
      <div class=${classes} @click=${onClickEntry}>
        <div class='header'>
          ${aisScoreChip}
          ${isCorrectChip}
          <div class='display-name'>${info.displayName}</div>
          <div class='flex-spacer'></div>
          ${info.task ? html`<div class='task'>task:${info.task}</div>` : null}
          ${
        info.hasTrexSentence === false ?
            html`<md-icon class='icon-button no-answer-indicator'
                    title='No supporting sentences in TREX.'>
              warning
              </md-icon>` :
            null}
        </div>
        <div class='description'>${info.description}</div>
      </div>
    `;
  }

  renderPageControls() {
    const toggleSorted = () => {
      this.sorted = !this.sorted;
    };

    const sortButtonClasses = classMap({
      'icon-button': true,
      'icon-button-active': this.sorted,
    });

    const pageZero = () => {
      this.pageStart = 0;
    };

    const pageEnd = () => {
      this.pageStart =
        this.maxPerPage * Math.floor((this.index.length - 1) / this.maxPerPage);
    };

    const pageBack = () => {
      this.pageStart = Math.max(0, this.pageStart - this.maxPerPage);
    };

    const pageForward = () => {
      if (this.pageStart + this.maxPerPage <= this.index.length) {
        this.pageStart += this.maxPerPage;
      }
    };

    const pageRandom = () => {
      const randIndex = Math.floor(
        Math.random() * Math.max(this.index.length - this.maxPerPage, 0),
      );
      this.pageStart =
        this.maxPerPage * Math.floor(randIndex / this.maxPerPage);
    };

    //prettier-ignore
    return html`
      <md-icon class=${sortButtonClasses} @click=${toggleSorted}
        title=${this.sorted ? 'Original order' : 'Sort by ID'}>
        sort
      </md-icon>
      <md-icon class='icon-button' @click=${pageZero}
        ?disabled=${this.pageStart === 0}>
        first_page
      </md-icon>
      <md-icon class='icon-button' @click=${pageBack}
        ?disabled=${this.pageStart === 0}>
        navigate_before
      </md-icon>
      <md-icon class='icon-button' @click=${pageForward}
        ?disabled=${this.pageEnd >= this.index.length}>
        navigate_next
      </md-icon>
      <md-icon class='icon-button' @click=${pageEnd}
        ?disabled=${this.pageEnd >= this.index.length}>
        last_page
      </md-icon>
      <md-icon class='icon-button outlined' @click=${pageRandom}>
        casino
      </md-icon>
    `;
  }

  renderMetrics() {
    const allMetrics: {[name: string]: number[]} = {};
    for (const entry of this.index) {
      if (entry.metrics != null) {
        for (const key of Object.keys(entry.metrics ?? {})) {
          if (!allMetrics.hasOwnProperty(key)) {
            allMetrics[key] = [];
          }
          allMetrics[key].push(entry.metrics[key]);
        }
      }
    }

    // prettier-ignore
    return html`
      <div class='metrics-holder'>
         ${Object.keys(allMetrics).map(key => {
           return html`<div class='metric-entry'>
                <label>${key}</label>
                <div>${mean(allMetrics[key]).toFixed(3)}</div>
              </div>`;
         })}
      </div>
    `;
  }

  override render() {
    // Sort by displayName which is the TREX ID.
    // TODO to change this to use just .id once we switch that to TREX IDs.
    const entryComparator = (a: ExampleInfo, b: ExampleInfo) => {
      const an = a.displayName;
      const bn = b.displayName;
      if (an > bn) return 1;
      else if (an === bn) return 0;
      else return -1;
    };
    const index = this.sorted
      ? this.index.slice().sort(entryComparator)
      : this.index;

    // prettier-ignore
    return html`
      <div class='index-container'>
        ${this.renderMetrics()}
        <div class='index-header'>
          <div class='index-header-text'>
            ${this.pageStart}-${this.pageEnd} of ${this.index.length} examples
          </div>
          <div class='index-header-buttons'>
            ${this.renderPageControls()}
          </div>
        </div>
        <div class='index-contents'>
          ${index.slice(this.pageStart, this.pageEnd).map(ex => this.renderEntry(ex))}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tda-data-index': TDADataIndex;
  }
}
