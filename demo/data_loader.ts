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
 * @fileoverview Data loader class.
 */

// tslint:disable:no-new-decorators

import {observable} from 'mobx';
import {type ExampleInfo} from './data_index';
import {type TDAExample} from './example_view';
import {getAISMetrics, getGroundTruthMetrics} from './metrics';
import {makeEndpointURL} from './utils';

async function loadRemoteJsonl(url: string): Promise<TDAExample[]> {
  const response = await fetch(url, {
    method: 'GET',
  });
  if (response.status === 502) {
    const errorMessage = `Failed to load dataset from ${url}.`;
    throw new Error(errorMessage);
  }
  const jsonlResponse = await response.text();
  const lines = jsonlResponse.split('\n').filter((line) => line);
  return [...lines.map((line) => JSON.parse(line) as TDAExample)];
}

/**
 * Uploaded file data.
 * We track this manually, because ObjectURL has XSS security issues.
 */
export class UploadedFileManager {
  files: {[name: string]: File} = {};

  addFile(name: string, file: File) {
    this.files[name] = file;
  }

  async loadExamples(name: string): Promise<TDAExample[]> {
    const file = this.files[name];
    const jsonlResponse = await file.text();
    const lines = jsonlResponse.split('\n').filter((line) => line);
    return [...lines.map((line) => JSON.parse(line) as TDAExample)];
  }
}
/** Global singleton. */
export const uploadedFileManager = new UploadedFileManager();

/**
 * Data loader service class.
 */
export class DataLoaderService {
  @observable jsonlPath: string | null = null;
  @observable examples: TDAExample[] = [];

  @observable isLoading: string | null = null;

  pathIsUploadedFile(path: string): boolean {
    return path.startsWith('uploaded:');
  }

  /**
   * Load data, to be available via .getExample()
   */
  // TODO: add load-latest functionality, to avoid race conditions?
  async loadData(path: string): Promise<void> {
    this.examples = [];
    if (!path) {
      this.jsonlPath = path;
      return;
    }

    this.isLoading = path;
    if (this.pathIsUploadedFile(path)) {
      this.examples = await uploadedFileManager.loadExamples(path);
    }
    else {
      this.examples = await loadRemoteJsonl(path);
    }

    this.jsonlPath = path;
    this.isLoading = null;
    console.log(
      `DataLoaderService: parsed ${this.examples.length} examples from ${this.jsonlPath}`,
    );
  }

  getExample(id: string): TDAExample {
    return this.examples[+id];
  }

  getIndex(filter: string): ExampleInfo[] {
    // Add _id so we can filter without tracking explicit loop index.
    const indexedExamples = this.examples.map((ex, i) =>
      Object.assign({}, ex, {'_id': i}),
    );

    let filteredExamples = indexedExamples;
    if (filter) {
      const filterFn =
          Function('ex', `return ${filter};`) as ((ex: TDAExample) =>
          boolean);
      filteredExamples = indexedExamples.filter(filterFn);
    }

    const index: ExampleInfo[] = filteredExamples.map((ex) => {
      const entry: ExampleInfo = {
        id: `${ex['_id']}`,
        // Support older files that used 'trex_id' as the field name.
        displayName: ex['example_id'] ?? ex['trex_id'],
        description: `${ex['inputs_plaintext']} ${ex['targets_plaintext']}`,
        metrics: {},
      };

      if (ex.hasOwnProperty('task')) {
        entry.task = ex['task'];
      }
      if (ex.hasOwnProperty('relation')) {
        entry.relation = ex['relation'];
      }

      let tdaScores;
      if ((tdaScores = ex['proponent_scores'])) {
        const bestTDAScore: number | null = Math.max(...tdaScores);
        if (isNaN(bestTDAScore)) {
          console.warn(
            'Warning: NaN value found for TDA score for example ',
            ex,
          );
        } else {
          entry.bestTDAScore = bestTDAScore;
        }
      }

      if (ex['proponent_correct']) {
        Object.assign(
          entry.metrics!,
          getGroundTruthMetrics(ex['proponent_correct']),
        );
      }

      let aisScores;
      if ((aisScores = ex['proponent_ais_scores'])) {
        const bestAISScore: number | null = Math.max(...aisScores);
        if (isNaN(bestAISScore)) {
          console.warn(
            'Warning: NaN value found for AIS score for example ',
            ex,
          );
        } else {
          entry.bestAISScore = bestAISScore;
          Object.assign(
            entry.metrics!,
            getAISMetrics(aisScores, /* threshold */ 0.5),
          );
        }
      }

      if (ex.hasOwnProperty('has_trex_sentence')) {
        entry.hasTrexSentence = ex['has_trex_sentence'];
      }
      return entry;
    });

    return index;
  }
}
