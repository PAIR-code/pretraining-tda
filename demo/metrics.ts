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
 * @fileoverview Evaluation metrics.
 */

import {cumSumArray, mean} from './utils';

/**
 * Compute ground-truth metrics for a single proponent list.
 *
 * @param isCorrect list of true/false for each proponent, in order.
 */
export function getGroundTruthMetrics(isCorrect: boolean[]): {
  [name: string]: number;
} {
  const precisionAtK = cumSumArray(isCorrect.map(Number)).map(
    (v, i) => v / (i + 1),
  );
  const posIndex = isCorrect.indexOf(true);
  return {
    'recall@10': Number(isCorrect.slice(0, 10).includes(true)),
    'recall@all': Number(isCorrect.includes(true)),
    'precision@1': precisionAtK[0] ?? 0,
    'precision@10': precisionAtK[9] ?? 0,
    'average_precision': precisionAtK ? mean(precisionAtK) : 0,
    'mrr_first': posIndex > -1 ? 1.0 / (1 + posIndex) : 0,
  };
}

/**
 * Compute AIS metrics for a single proponent list.
 *
 * @param aisScores list of AIS scores for each proponent.
 * @param threshold threshold to binarize AIS scores.
 */
export function getAISMetrics(
  aisScores: number[],
  threshold = 0.5,
): {[name: string]: number} {
  const binaryPreds = aisScores.map((v) => Number(v > threshold));
  const precisionAtK = cumSumArray(binaryPreds).map((v, i) => v / (i + 1));
  const posIndex = binaryPreds.indexOf(1);
  return {
    'ais_threshold': threshold,
    'ais_recall@10': Number(binaryPreds.slice(0, 10).includes(1)),
    'ais_recall@all': Number(binaryPreds.includes(1)),
    'ais_precision@1': precisionAtK[0] ?? 0,
    'ais_precision@10': precisionAtK[9] ?? 0,
    'ais_average_precision': precisionAtK ? mean(precisionAtK) : 0,
    'ais_mrr_first': posIndex > -1 ? 1.0 / (1 + posIndex) : 0,
  };
}
