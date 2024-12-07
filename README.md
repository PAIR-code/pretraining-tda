# Scalable Influence and Fact Tracing for Large Language Model Pretraining

This is the landing page for the code and data release accompanying
[Scalable Influence and Fact Tracing for Large Language Model Pretraining][tda-paper]
(Chang et al. 2024).

Specifically, this includes:

*   [Data files](./#data-files) for:
    *   The corpus of 19.6M sentences from T-REx Wikipedia abstracts (Section
        4.2 and 5 of the paper).
    *   The set of 5.4k prompts (queries) used for fact tracing evaluation, as
        well as the full set of 1.2M queries these are sampled from.
    *   TDA method outputs (retrieved and scored proponents) corresponding to
        the experiments in Section 5 and Section 6 of the paper.
*   [A data viewer app](./#running-your-own-demo) to make it easier to look at
    and analyze sets of retrieved proponents. This is a self-contained app that
    runs entirely in your browser; you can try it out [here][tda-demo].

## Data files

Unless specified otherwise, all files are in JSON lines (`.jsonl`) format with
one record per line.

### T-REx sentences

This is the corpus of 19.6 M sentences as described in Section 4.2 and Section
5, and used for the experiments in Section 5 of the paper. The data is
approximately 6GB, split across 20 shards:

`https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-000[XY]-of-00020`:

*   [00](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00000-of-00020)
    [01](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00001-of-00020)
    [02](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00002-of-00020)
    [03](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00003-of-00020)
    [04](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00004-of-00020)
*   [05](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00005-of-00020)
    [06](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00006-of-00020)
    [07](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00007-of-00020)
    [08](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00008-of-00020)
    [09](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00009-of-00020)
*   [10](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00010-of-00020)
    [11](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00011-of-00020)
    [12](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00012-of-00020)
    [13](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00013-of-00020)
    [14](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00014-of-00020)
*   [15](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00015-of-00020)
    [16](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00016-of-00020)
    [17](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00017-of-00020)
    [18](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00018-of-00020)
    [19](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl-00019-of-00020)

Or fetch all using [gsutil](https://cloud.google.com/storage/docs/gsutil):
`gsutil -m cp 'gs://tda-resources/2410.17413/public/trex_sentences.jsonl-*'
/path/to/local/dir`

Each record has the following fields:

*   `sentence_id`
*   `text`
*   `abstract_uri`
*   `sent_idx_in_abst` - index of this sentence in the original abstract
*   `fact_triples` - relevant fact triples which are found in this sentence

### Evaluation queries

The set of 5.4k triples and associated prompts (factual queries) used in the
experiments in the paper:
https://storage.googleapis.com/tda-resources/2410.17413/public/trex_facts_sample.jsonl

The full set of 1.2M triples which these are sampled from:
https://storage.googleapis.com/tda-resources/2410.17413/public/trex_facts.jsonl
(1GB file)

Each record has the following fields:

*   `fact_id`
*   `kilt_id`
*   `entity0`, `relation`, and `entity1`
*   `entity0_uri`, `predicate_uri`, and `entity1_uri`
*   `entity0_alias` and `entity1_alias` - alternative surface forms
*   `trex_sentences`- mapping back to the [T-REx sentences](#tres-sentences),
    above
*   `c4_frequency` - annotation, based on string matching, of how frequently
    this fact appears in the C4 pretraining corpus
*   `is_repetition` - if the fact contains repetition between entity0 and
    entity1
*   `prompt0`, `prompt1`, `prompt2` - input prompts for this fact, generated
    using different templates. Unless otherwise specified, we use `prompt0` for
    experiments in the paper.

### TDA method results

**Table 1: T-REx retrievals**

Method    | Download .jsonl file                                                                                                              | Viewer link
--------- | --------------------------------------------------------------------------------------------------------------------------------- | -----------
BM25      | [trex_retrievals_bm25.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_bm25.jsonl)           | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_bm25.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_bm25.jsonl%29)
Gecko     | [trex_retrievals_gecko.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_gecko.jsonl)         | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_gecko.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_gecko.jsonl%29)
TRAK      | [trex_retrievals_trak.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_trak.jsonl)           | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_trak.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_trak.jsonl%29)
Exp 1     | [trex_retrievals_exp1.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp1.jsonl)           | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_exp1.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_exp1.jsonl%29)
Exp 2     | [trex_retrievals_exp2.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp2.jsonl)           | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_exp2.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_exp2.jsonl%29)
Exp 3     | [trex_retrievals_exp3.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp3.jsonl)           | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_exp3.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_exp3.jsonl%29)
Exp 4     | [trex_retrievals_exp4.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp4.jsonl)           | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_exp4.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_exp4.jsonl%29)
Exp 5     | [trex_retrievals_exp5.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp5.jsonl)           | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_exp5.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_exp5.jsonl%29)
TrackStar | [trex_retrievals_trackstar.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_trackstar.jsonl) | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Btrex_retrievals_trackstar.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Ftrex_retrievals_trackstar.jsonl%29)

**Table 2: C4 retrievals**

Method               | Download .jsonl file                                                                                                                        | Viewer link
-------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -----------
BM25                 | [c4_trex_retrievals_bm25.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_bm25.jsonl)               | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Bc4_trex_retrievals_bm25.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Fc4_trex_retrievals_bm25.jsonl%29)
Gecko                | [c4_trex_retrievals_gecko.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_gecko.jsonl)             | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Bc4_trex_retrievals_gecko.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Fc4_trex_retrievals_gecko.jsonl%29)
Gradient dot product | [c4_trex_retrievals_grad_dot.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_grad_dot.jsonl)       | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Bc4_trex_retrievals_grad_dot.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Fc4_trex_retrievals_grad_dot.jsonl%29)
Gradient cosine      | [c4_trex_retrievals_grad_cosine.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_grad_cosine.jsonl) | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Bc4_trex_retrievals_grad_cosine.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Fc4_trex_retrievals_grad_cosine.jsonl%29)
TrackStar            | [c4_trex_retrievals_trackstar.jsonl](https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_trackstar.jsonl)     | [view in app](https://pair-code.github.io/pretraining-tda/demo/?jsonl_path=%5Bc4_trex_retrievals_trackstar.jsonl%5D%28https%3A%2F%2Fstorage.googleapis.com%2Ftda-resources%2F2410.17413%2Fpublic%2Fc4_trex_retrievals_trackstar.jsonl%29)

Each record has the following fields:

*   `example_id`
*   `query_set`
*   `inputs_plaintext` - the prompt (query) string, generally this is `prompt0`
    from the query files above
*   `targets_plaintext` - the target string, generally `entity1` from the query
    files above
*   `proponents` (as `string[]`) - proponent passage text
*   `proponent_ids` (as `string[]`) - passage IDs (for T-REx or C4)
*   `proponent_scores` (as `number[]`) - passage scores from the TDA method
    (e.g. Equation (1) of the paper)

And optionally, also:

*   `fact_id`
*   `relation`
*   `8b_generations` (as `string[]`) - decoder samples from the 8B model, for
    estimating confidence in the LLM's answer
*   `8b_confidence` (as `number`) - fraction of samples from the 8B that match
    the target entity or an alias
*   `ground_truth` - ground-truth target (entity)
*   `is_8b_correct` - if 8B model generation matches the ground truth or an
    alias
*   `has_trex_sentence` - if there exists any sentence in T-REx containing this
    fact
*   `c4_frequency` and `c4_frequency_bucket` - frequency of the fact in the C4
    corpus, based on string matching. Bucket groups this into 0, 1, 2, 3, 4, 5,
    with 5 containing the most common facts.
*   `proponent_correct` (as `boolean[]`) - for T-REx retrievals, whether each
    proponent sentence contains the fact, according to the T-REx annotations.
*   `proponent_ais_scores` (as `number[]`) - for C4 retrievals, scores from the
    AIS (entailment) model for each proponent.

For TDA methods that support a notion of "opponents" (this includes most
gradient-based methods, but not the BM25 or Gecko baselines) we also include
fields analogous to the proponents:

*   `opponents` (as `string[]`)
*   `opponent_ids` (as `string[]`)
*   `opponent_scores` (as `number[]`)

## Data viewer

Lists of proponent passages are challenging to work with in spreadsheets or
plain text files, due to the amount of text on-screen and the difficulty of
quickly looking at scores, identifying string matches, or filtering to specific
types of queries. We found it useful to write custom HTML visualizations, and
packaged these into a simple viewer app.

For any data in the [format above](#tda-method-results) you can use our hosted
instance as-is at https://pair-code.github.io/pretraining-tda/demo. This runs
entirely in the browser and doesn't send data to any server.

TODO(iftenney): user guide for the app with screenshots.

For researchers building on this work or otherwise exploring TDA or similar
retrieval tasks, you may find it useful to modify this app - such as to add
additional fields, or to just update [presets.ts](./demo/presets.ts) with files
for your project. The easiest way to do this is to fork this repository, then
serve your own copy of the demo locally using [Node.js][nodejs], and [NPM][npm]:

```sh
# Clone the repo
git clone git@github.com:pair-code/pretraining-tda
cd pretraining-tda

# Install and build the website with Node.js
npm install
npm run website

# Serve the website locally
npm run serve
```

## Citing this work

If you use this data or find the data viewer useful, please cite our paper at:

```bibtex
@article{chang2024scalable,
  title={Scalable Influence and Fact Tracing for Large Language Model Pretraining},
  author={Chang, Tyler A. and Rajagopal, Dheeraj and Bolukbasi, Tolga and Dixon, Lucas and Tenney, Ian},
  journal={arXiv preprint arXiv:2410.17413},
  year={2024}
}
```

## License and disclaimer

Copyright 2024 DeepMind Technologies Limited

All software is licensed under the Apache License, Version 2.0 (Apache 2.0); you
may not use this file except in compliance with the Apache 2.0 license. You may
obtain a copy of the Apache 2.0 license at:
https://www.apache.org/licenses/LICENSE-2.0

All other materials are licensed under the Creative Commons Attribution 4.0
International License (CC-BY). You may obtain a copy of the CC-BY license at:
https://creativecommons.org/licenses/by/4.0/legalcode

Unless required by applicable law or agreed to in writing, all software and
materials distributed here under the Apache 2.0 or CC-BY licenses are
distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the licenses for the specific language governing
permissions and limitations under those licenses.

This is not an official Google product.

[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[tda-demo]: https://pair-code.github.io/pretraining-tda/demo
[tda-paper]: https://arxiv.org/abs/2410.17413
[trex]: https://hadyelsahar.github.io/t-rex/
