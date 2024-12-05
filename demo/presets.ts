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
 * @fileoverview List of preset data files, for convenience loading.
 */

export const JSONL_PRESETS: {[name: string]: string} = {
  // Small set of files for testing.
  // TODO(iftenney): update with final set of files once we have approval to
  // host on GCS.
  'trex_bm25_http':
      'https://storage.googleapis.com/tda-resources/pretraining-tracin-paper/frequency_balanced_predictions_groundtruth_retrievals.jsonl',
  'c4_trackstar_ss_http':
      'https://storage.googleapis.com/tda-resources/pretraining-tracin-paper/trackstar_c4.annotated.sentence-split.jsonl',
  'c4_trackstar_http':
      'https://storage.googleapis.com/tda-resources/pretraining-tracin-paper/trackstar_c4.annotated.jsonl',
};
