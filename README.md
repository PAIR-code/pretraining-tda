# Scalable Influence and Fact Tracing for Large Language Model Pretraining

This repo contains data files and demo code for our paper,
[Scalable Influence and Fact Tracing for Large Language Model Pretraining][tda-paper],
applying training data attribution (TDA) methods to LLM pretraining.

A [hosted demo][tda-demo] lets you explore influential pretraining examples
identified by our method for factual predictions, factual errors, commonsense
reasoning, arithmetic, and open-ended generation for an 8B-parameter LLM.

## Data files

We release the processed fact tracing data used in our paper, along with TDA
results for a variety of tasks. All files are at
`https://storage.googleapis.com/tda-resources/2410.17413/public/`. Specifically,
we release the following data files:

* [T-REx][trex] sentences:
`https://storage.googleapis.com/tda-resources/2410.17413/public/trex_sentences.jsonl*`<br>
These are the Wikipedia abstract sentences from T-REx, including:
`sentence_id`, `text`, `abstract_uri`, `sent_idx_in_abst`, and `fact_triples`
(relevant facts triples that are contained in the sentence).

* Filtered [T-REx][trex] fact triples used as evaluation queries (1.2M):
`https://storage.googleapis.com/tda-resources/2410.17413/public/trex_facts.jsonl`<br>
Sample of 5.4K facts used for TDA eval:
`https://storage.googleapis.com/tda-resources/2410.17413/public/trex_facts_sample.jsonl`<br>
These fact triples cover 97 factual
relation types. Fact triple info is contained in the fields:
`fact_id`, `kilt_id`, `entity0`, `relation`, `entity1`, `entity0_uri`,
`predicate_uri`, `entity1_uri`, `entity0_alias` (alternative surface forms for
entity0), `entity1_alias`, and `trex_sentences` (mapping back to the T-REx
sentences above).
We also annotate: `c4_frequency` (annotated using string matching) and
`is_repetition` (whether the fact contains repetition between entity0 and
entity1).
Finally, we use templates to generate three input prompts for each fact:
`prompt0`, `prompt1`, and `prompt2`.

* TDA results:<br>
`https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_[method].jsonl`:
results retrieving from T-REx sentences for T-REx
factual queries, using different TDA methods (Table 1 in our paper).<br>
`https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_[method].jsonl`:
results retrieving from C4 for T-REx
factual queries, using different TDA methods (Table 2 in our paper).<br>
`https://storage.googleapis.com/tda-resources/2410.17413/public/c4_[task]_retrievals_[method].jsonl`: results retrieving from C4 for other evaluation
tasks.
      * All files include the evaluation query info: `example_id` (the query
      id), `query_set`, `inputs_plaintext`, and `targets_plaintext`.
      * They also include the influential examples (proponents) identified by
      the method: `proponent_ids` (ids either from T-REx or C4, depending on
      where proponents are retrieved from), `proponents` (proponents text),
      and `proponent_scores` (retrieval scores using the method).
      * Depending on the task, files can contain optional fields:<br>
      `fact_id`, `8b_generations`, `relation`, and `8b_confidence` (only for
      the T-REx queries).<br>
      `is_8b_correct` (for any tasks with a ground truth).<br>
      `c4_frequency` and `c4_frequency_bucket` (only for ground truth T-REx
      queries).<br>
      `groundtruth` (only for incorrectly-predicted T-REx queries).<br>
      `has_trex_sentence` and `proponent_correct` (only for retrievals from
      T-REx, where we can compare to "ground truth" entailing examples for
      evaluation).<br>
      `proponent_ais_scores` (proponent entailment scores, only for retrievals from C4 for T-REx
      queries).<br>
      `opponent_ids`, `opponents`, `opponent_scores` (only when the retrieval
      method supports opponents).

## Running your own demo

We recommend using the [hosted demo][tda-demo], but you may also run the demo
server locally using [Git][git], [Node.js][nodejs], and [NPM][npm].

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

All software is licensed under the Apache License, Version 2.0 (Apache 2.0);
you may not use this file except in compliance with the Apache 2.0 license.
You may obtain a copy of the Apache 2.0 license at:
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

[git]: https://git-scm.com/
[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[tda-demo]: https://pair-code.github.io/pretraining-tda/demo
[tda-paper]: https://arxiv.org/abs/2410.17413
[trex]: https://hadyelsahar.github.io/t-rex/
