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
  // T-REx retrievals (Table 1)
  'trex_retrievals_bm25':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_bm25.jsonl',
  'trex_retrievals_gecko':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_gecko.jsonl',
  'trex_retrievals_trak':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_trak.jsonl',
  'trex_retrievals_exp1':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp1.jsonl',
  'trex_retrievals_exp2':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp2.jsonl',
  'trex_retrievals_exp3':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp3.jsonl',
  'trex_retrievals_exp4':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp4.jsonl',
  'trex_retrievals_exp5':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp5.jsonl',
  'trex_retrievals_trackstar':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_trackstar.jsonl',
  // C4 retrievals (Table 2)
  'c4_trex_retrievals_bm25':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_bm25.jsonl',
  'c4_trex_retrievals_gecko':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_gecko.jsonl',
  'c4_trex_retrievals_grad_dot':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_grad_dot.jsonl',
  'c4_trex_retrievals_grad_cosine':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_grad_cosine.jsonl',
  'c4_trex_retrievals_trackstar':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_trackstar.jsonl',
  // C4 retrievals for incorrect preds
  'c4_trex_incorrectpred_retrievals_trackstar':
      'https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_incorrectpred_retrievals_trackstar.jsonl',
};

/**
 * Name of default preset if not otherwise specified on page load.
 */
export const DEFAULT_PRESET = 'c4_trex_retrievals_trackstar';
