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

// tslint:disable:g3-no-void-expression
// tslint:disable:no-new-decorators

import '@material/web/icon/icon';
import './data_index';
import './elements/tooltip';
import './example_view';

import {MobxLitElement} from '@adobe/lit-mobx';
import {html, nothing} from 'lit';
import {customElement} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {computed, observable, reaction} from 'mobx';

import {styles} from './app.css';
import {ExampleClicked, ExampleInfo} from './data_index';
import {DataLoaderService, uploadedFileManager} from './data_loader';
import {styles as litStyles} from './elements/shared_styles.css';
import {type TDAExample} from './example_view';
import {DEFAULT_PRESET, JSONL_PRESETS} from './presets';
import {makeEndpointURL, URLService} from './utils';

interface AppMetadata {
  canonicalURL?: string;
  defaultJsonlPaths?: {[name: string]: string};
}

/**
 * Main app element.
 */
@customElement('tda-app')
export class TDAApp extends MobxLitElement {
  static override get styles() {
    return [litStyles, styles];
  }
  urlService = new URLService();
  mainDataLoaderService = new DataLoaderService();
  sxsDataLoaderService = new DataLoaderService();

  @observable metadata: AppMetadata = {};

  @observable jsonlPath = '';
  @observable editedJsonlPath = '';

  @observable dataFilter = '';
  @observable editedDataFilter = '';

  @observable sxsEnabled = false;
  @observable sxsJsonlPath = '';
  @observable editedSxsJsonlPath = '';

  @observable dataIndex: ExampleInfo[] = [];
  @observable taskFilter?: string;

  @observable statusMessage = '';

  @observable selectedExId = '0';
  @observable currentExample?: TDAExample;
  @observable sxsExample?: TDAExample;

  constructor() {
    super();
    this.initialize();
  }

  private getBestURL() {
    const urlBase = this.metadata.canonicalURL || window.location.origin;
    return new URL(`${urlBase}${window.location.search}`).href;
  }

  onClickCopyLink() {
    const url = this.getBestURL();
    navigator.clipboard.writeText(url);
    // For user; keep this log statement.
    console.log('Copied URL to this instance: ', url);
  }

  updateIndex(filter: string) {
    this.dataIndex = []; // reset
    this.taskFilter = undefined;
    this.editedDataFilter = filter;

    this.statusMessage = `Loading data index from ${this.mainDataLoaderService.jsonlPath}`;
    this.dataIndex = this.mainDataLoaderService.getIndex(filter);
    if (!this.dataIndex) {
      this.statusMessage = `Error: unable to read from ${this.mainDataLoaderService.jsonlPath}`;
    } else {
      this.statusMessage = '';
    }
  }

  updateExample(id: string) {
    this.statusMessage = 'Loading example...';
    const mainExample = this.mainDataLoaderService.getExample(id);
    if (this.sxsJsonlPath) {
      const sxsExample = this.sxsDataLoaderService.getExample(id);
      this.sxsExample = sxsExample;
    } else {
      this.sxsExample = undefined;
    }
    this.currentExample = mainExample;
    this.statusMessage = '';
  }

  private async initialize() {
    if (Object.keys(this.metadata.defaultJsonlPaths ?? {}).length === 0) {
      this.metadata.defaultJsonlPaths = Object.assign({}, JSONL_PRESETS);
    }
    this.jsonlPath = this.metadata.defaultJsonlPaths?.[DEFAULT_PRESET] ?? '';

    this.urlService.syncParam(
      'jsonl_path',
      (urlParam) => {
        this.jsonlPath = urlParam;
      },
      () => this.jsonlPath,
      (path: string) => path,
    );

    this.urlService.syncParam(
      'sxs_jsonl_path',
      (urlParam) => {
        this.sxsJsonlPath = urlParam;
        if (this.sxsJsonlPath) {
          this.sxsEnabled = true;
        }
      },
      () => [this.sxsJsonlPath, this.sxsEnabled] as [string, boolean],
      ([path, enabled]: [string, boolean]) => (enabled ? path : ''),
    );

    this.urlService.syncParam(
      'example_id',
      (urlParam) => {
        this.selectedExId = urlParam;
      },
      () => this.selectedExId,
      (id: string) => id,
    );

    this.urlService.syncParam(
      'data_filter',
      (urlParam) => {
        this.dataFilter = urlParam;
        this.editedDataFilter = this.dataFilter;
      },
      () => this.dataFilter,
      (filter: string) => filter,
    );

    reaction(
      () => this.jsonlPath,
      async (path) => {
        this.editedJsonlPath = path;
        this.currentExample = undefined; // reset
        this.dataFilter = ''; // reset

        await this.mainDataLoaderService.loadData(this.jsonlPath);
        this.updateIndex(this.dataFilter);
        this.updateExample(this.selectedExId);
      },
      {fireImmediately: true},
    );

    reaction(
      () => this.sxsJsonlPath,
      async (path) => {
        this.editedSxsJsonlPath = path;
        await this.sxsDataLoaderService.loadData(path);
        this.updateExample(this.selectedExId);
      },
      {fireImmediately: true},
    );

    reaction(
      () => this.dataFilter,
      async (filter) => {
        this.updateIndex(filter);
      },
      // {fireImmediately: true},
    );

    reaction(
      () => this.selectedExId,
      async (id) => {
        this.currentExample = undefined; // reset
        this.updateExample(id);
      },
      // {fireImmediately: true},
    );
  }

  selectExample(id: string) {
    this.selectedExId = id;
  }

  private async getMetadata() {}

  private renderRawJsonPopover() {
    const queryText = `${this.currentExample?.['inputs_plaintext']} ${this.currentExample?.['targets_plaintext']}`;
    const content = JSON.stringify(this.currentExample, null, '  ');

    // prettier-ignore
    return html`
      <button class='hairline-button raw-json-button' popovertarget='raw-json-popover'>
        <span>Raw JSON </span><span class='material-icon'>open_in_full</span>
      </button>
      <div id='raw-json-popover' popover>
        <div class='flex-column-container'>
          <div class='raw-json-header'>
            <div>Example [${this.selectedExId}]: ${queryText}</div>
            <button class='invisible-button'
              popovertarget='raw-json-popover' popovertargetaction='hide'>
              <md-icon class='icon-button outlined'>close</md-icon>
            </button>
          </div>
          <div class='raw-json-content'>${content}</div>
        </div>
      </div>
    `;
  }

  private renderExampleControls() {
    const handleChangeEvalId = (e: Event) => {
      this.selectExample((e.target as HTMLInputElement).value);
    };

    const handlePlusButton = (e: Event) => {
      let currentValue = Number(this.selectedExId);
      currentValue++;
      this.selectExample(String(currentValue));
    };
    const handleMinusButton = (e: Event) => {
      let currentValue = Number(this.selectedExId);
      currentValue--;
      this.selectExample(String(currentValue));
    };

    // prettier-ignore
    return html`
      <div class="number-changer">
        Example index:
        <button class="decrease" @click=${handleMinusButton}><</button>
        <input
          type="number"
          id="number-field"
          value=${this.selectedExId}
          @change=${handleChangeEvalId} />
        <button class="increase" @click=${handlePlusButton}>></button>
      </div>
      <div class='flex-spacer'></div>
      ${this.renderRawJsonPopover()}
    `;
  }

  renderMainPathInput() {
    const setEditedJsonlPath = (e: Event) => {
      // tslint:disable-next-line:no-any
      this.editedJsonlPath = (e as any).target.value;
    };

    const updateJsonlPath = () => {
      this.jsonlPath = this.editedJsonlPath;
    };

    const onEnterUpdatePath = (e: KeyboardEvent) => {
      if (e.key === 'Enter') updateJsonlPath();
    };

    const pathIsEdited = this.jsonlPath !== this.editedJsonlPath;
    const containerClasses = classMap({
      'path-input': true,
      'base-path-input': true,
      'edited': pathIsEdited,
    });

    const toggleSxsMode = () => {
      this.sxsEnabled = !this.sxsEnabled;
      if (this.sxsEnabled && !this.sxsJsonlPath) {
        // Pre-populate if empty, for convenience.
        this.editedSxsJsonlPath = this.editedJsonlPath;
      }
    };

    const sxsButtonClasses = classMap({
      'hairline-button': true,
      'sxs-mode-button': true,
      'active': this.sxsEnabled,
    });
    const sxsTooltipText = this.sxsEnabled ? 'Exit SxS mode' : 'Enter SxS mode';

    const handleFileUpload = (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        console.log('Uploaded file', file);
        const handle = `uploaded:${file.name}`;
        uploadedFileManager.addFile(handle, file);
        this.jsonlPath = handle; // will load asynchronously
      }
    };

    const clickFileUpload = () => {
      this.shadowRoot!.getElementById('upload-main-jsonl')?.click();
    };

    // prettier-ignore
    return html`
      <div class=${containerClasses}>
        <label for='jsonl_path'>
          ${this.sxsEnabled ? 'Experiment' : 'Source'} file:
        </label>
        <input type='text' name='jsonl_path' title=${this.editedJsonlPath}
          value=${this.editedJsonlPath}
          @input=${setEditedJsonlPath}
          @keydown=${onEnterUpdatePath}>
        </input>
        <button class='hairline-button' @click=${updateJsonlPath}
         ?disabled=${!pathIsEdited}>
          Load
        </button>
        <div class='file-upload'>
          <input type="file" id="upload-main-jsonl" @change=${
        handleFileUpload} />
          <lit-tooltip content="Upload .jsonl file">
            <button class='hairline-button file-upload-button'
              slot='tooltip-anchor' @click=${clickFileUpload}>
              <span class='material-icon'>upload_file</span>
              Upload
            </button>
          </lit-tooltip>
        </div>
        <lit-tooltip content=${sxsTooltipText}>
          <button class=${sxsButtonClasses} slot='tooltip-anchor'
            @click=${toggleSxsMode}>
            <span class='material-icon'>compare</span>
            Compare
          </button>
        </lit-tooltip>
        <lit-tooltip content="Copy link to this page" tooltipPosition="left">
          <button class='hairline-button copy-link-button' slot='tooltip-anchor'
            @click=${this.onClickCopyLink}>
            <span class='material-icon'>link</span>
            Copy link
          </button>
        </lit-tooltip>
      </div>
    `;
  }

  renderSxsPathInput() {
    const setEditedJsonlPath = (e: Event) => {
      // tslint:disable-next-line:no-any
      this.editedSxsJsonlPath = (e as any).target.value;
    };

    const updateJsonlPath = () => {
      this.sxsJsonlPath = this.editedSxsJsonlPath;
    };

    const onEnterUpdatePath = (e: KeyboardEvent) => {
      if (e.key === 'Enter') updateJsonlPath();
    };

    const pathIsEdited = this.sxsJsonlPath !== this.editedSxsJsonlPath;
    const containerClasses = classMap({
      'path-input': true,
      'expt-path-input': true,
      'edited': pathIsEdited,
    });

    const handleFileUpload = (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        console.log('Uploaded file', file);
        const handle = `uploaded:${file.name}`;
        uploadedFileManager.addFile(handle, file);
        this.sxsJsonlPath = handle; // will load asynchronously
      }
    };

    const clickFileUpload = () => {
      this.shadowRoot!.getElementById('upload-sxs-jsonl')?.click();
    };

    // prettier-ignore
    return html`
      <div class=${containerClasses}>
        <label for='jsonl_path'>Baseline file:</label>
        <input type='text' name='jsonl_path' title=${this.editedSxsJsonlPath}
          value=${this.editedSxsJsonlPath}
          @input=${setEditedJsonlPath}
          @keydown=${onEnterUpdatePath}>
        </input>
        <button class='hairline-button' @click=${updateJsonlPath}
         ?disabled=${!pathIsEdited}>
          Load
        </button>
        <div class='file-upload'>
          <input type="file" id="upload-sxs-jsonl" @change=${
        handleFileUpload} />
          <lit-tooltip content="Upload .jsonl file">
            <button class='hairline-button file-upload-button'
              slot='tooltip-anchor' @click=${clickFileUpload}>
              <span class='material-icon'>upload_file</span>
              Upload
            </button>
          </lit-tooltip>
        </div>
      </div>
    `;
  }

  renderHeader() {
    const renderedFileSuggestions = Object.entries(
      (this.metadata.defaultJsonlPaths ?? {}) as {[name: string]: string},
    ).map(([name, path]) => {
      const url = makeEndpointURL('/', {'jsonl_path': path});
      const linkClasses = classMap({'current-file': path === this.jsonlPath});
      // prettier-ignore
      return html`<a class=${linkClasses} href=${url}>${name}</a>`;
    });

    // prettier-ignore
    return html`
      <div class='main-title header-group'>
        <img src="favicon.png" class='status-emoji'>
        Pretraining TDA Demo
      </div>
      <div class='header-controls'>
        ${this.renderMainPathInput()}
        <div class='header-group file-suggestions'>
          <label>Presets:</label>
          ${renderedFileSuggestions}
        </div>
        ${this.sxsEnabled ? this.renderSxsPathInput() : null}
      </div>
    `;
  }

  @computed
  get dataByTask(): Map<string, ExampleInfo[]> {
    // tslint:disable-next-line:no-any
    return (Map as any).groupBy(
      this.dataIndex,
      (info: ExampleInfo) => info.task,
    );
  }

  @computed
  get filteredDataIndex(): ExampleInfo[] {
    let ret = this.dataIndex;
    if (this.taskFilter != null) {
      ret = this.dataByTask.get(this.taskFilter) ?? [];
    }
    return ret;
  }

  private renderTaskFilters() {
    // Don't show if nothing to filter on.
    if (this.dataIndex.length <= 0) {
      // prettier-ignore
      return html`
        <div class='filter-group filter-pending'>
          <label class='row-label'>Task:</label>
          <div>(waiting for data)</div>
        </div>
      `;
    }

    const options = [...this.dataByTask.keys()].map((key: string) => {
      const selectOption = () => {
        if (this.taskFilter === key) {
          this.taskFilter = undefined;
        } else {
          this.taskFilter = key;
        }
      };

      const classes = classMap({
        'filter-chip': true,
        'selected': this.taskFilter === key,
      });

      // prettier-ignore
      return html`
        <div class=${classes} @click=${selectOption}>
          ${key} (${this.dataByTask.get(key)!.length})
        </div>
      `;
    });

    // Don't show if there's only one category.
    if (options.length <= 1) {
      return nothing;
    }

    // prettier-ignore
    return html`
      <div class='filter-group'>
        <label class='row-label'>Task:</label>
        <div class='filter-chips'>
          ${options}
        </div>
      </div>
    `;
  }

  private renderDataFilters() {
    const setEditedDataFilter = (e: Event) => {
      // tslint:disable-next-line:no-any
      this.editedDataFilter = (e as any).target.value;
    };

    const updateDataFilter = () => {
      this.dataFilter = this.editedDataFilter;
    };

    const onEnterUpdateDataFilter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') updateDataFilter();
    };

    const filterIsEdited = this.dataFilter !== this.editedDataFilter;
    const filterGroupClasses = classMap({
      'filter-group': true,
      'filter-group-wide': true,
      'filter-pending': this.dataIndex.length <= 0,
      'edited': filterIsEdited,
    });

    const renderPreset = (name: string, filter: string) => {
      const presetClasses = classMap({
        'preset-filter': true,
        'current-filter': filter === this.dataFilter,
      });
      const setDataFilter = () => {
        this.editedDataFilter = filter;
        updateDataFilter();
      };
      // prettier-ignore
      return html`<span class=${presetClasses} @click=${setDataFilter}>${name}</span>`;
    };

    const filterPlaceholderText =
        'JS expression, such as ex.relation.startsWith(\'location\')';

    // prettier-ignore
    return html`
      <div class=${filterGroupClasses}>
        <label class='row-label' for=data_filter'>Data Filter:</label>
        <div class='data-filter'>
          <input type='text' name='data_filter' title=${this.editedDataFilter}
            value=${this.editedDataFilter}
            placeholder=${this.editedDataFilter ? '' : filterPlaceholderText}
            @input=${setEditedDataFilter}
            @keydown=${onEnterUpdateDataFilter}>
          </input>
          <button class='hairline-button' @click=${updateDataFilter}
            ?disabled=${!filterIsEdited}>
            Apply
          </button>
          <div class='preset-links'>
            <label>Presets:</label>
            ${renderPreset('(no filter)', '')}
            ${renderPreset('Correct', 'ex.is_8b_correct')}
            ${
        renderPreset(
            'Correct and Confident',
            'ex.is_8b_correct && ex["8b_confidence"] > 0.5')}
            ${
        renderPreset(
            'Correct, Confident, and Common',
            'ex.is_8b_correct && ex["8b_confidence"] > 0.5 && ex.c4_frequency_bucket >= 3')}
            ${renderPreset('Common (3,4,5)', 'ex.c4_frequency_bucket >= 3')}
            ${renderPreset('Very Common (4,5)', 'ex.c4_frequency_bucket >= 4')}
            ${renderPreset('Most Common (5)', 'ex.c4_frequency_bucket >= 5')}
            ${renderPreset('Confident (>0.5)', 'ex["8b_confidence"] > 0.5')}
          </div>
        </div>
      </div>
    `;
  }

  renderLoading() {
    if (this.mainDataLoaderService.isLoading == null) return null;

    // prettier-ignore
    return html`
      <div id='main-loading'>
        <h2>Loading data</h2>
        ${this.mainDataLoaderService.isLoading!}
      </div>
    `;
  }

  override render() {
    const onExampleClick = (e: CustomEvent<ExampleClicked>) => {
      const id = e.detail.id;
      if (id !== this.selectedExId) {
        this.selectExample(id);
      }
    };

    // prettier-ignore
    return html`
      <div id="main-grid">
        <div id="header">
          ${this.renderHeader()}
        </div>
        <div id="filters">
          ${this.renderDataFilters()}
          ${this.renderTaskFilters()}
        </div>
        ${this.renderLoading() ??
          html`
          <div id='left-bar'>
            <tda-data-index .index=${this.filteredDataIndex}
              selectedId=${this.selectedExId}
              @example-clicked=${onExampleClick}>
            </tda-data-index>
          </div>
          <div id="example-controls">
            ${this.renderExampleControls()}
          </div>
          <div id="example">
            <tda-example-view .example=${this.currentExample}
            .sxsExample=${this.sxsEnabled ? this.sxsExample : undefined}>
            </tda-example-view>
          </div>`
        }
        <div id="footer">
          ${this.statusMessage}
        </div>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tda-app': TDAApp;
  }
}
