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
 * Utils and helpers for TDA demo frontend.
 */
import * as d3 from 'd3';

// tslint:disable:no-new-decorators
import {TemplateResult, html} from 'lit';
import {ClassMapDirective} from 'lit/directives/class-map.js';
import {observable, reaction, toJS} from 'mobx';

/** Calculates the mean for a list of numbers */
export function mean(values: number[]): number {
  return values.reduce((a, b) => a + b) / values.length;
}

/**
 * Cumulative sum for an array.
 */
export function cumSumArray(array: number[]) {
  const newArray: number[] = [];
  array.reduce((a, b, i) => (newArray[i] = a + b), 0);
  return newArray;
}

// /**
//  * Color map for TDA scores.
//  */
// export const tdaColor = d3.scaleSequential(d3.interpolateBlues);
/**
 * Color map for AIS scores.
 */
export const aisColor = d3.scaleSequential(d3.interpolateGreens);
/**
 * Color map for correctness (mrr first)
 */
// tslint:disable-next-line:no-any
export const mrrColor = d3.scaleLinear().range(['#ffffff', '#61aff7'] as any);

/**
 * Encode a URL for an endpoint.
 */
export function makeEndpointURL(
  endpoint: string,
  params?: {[key: string]: string},
): string {
  const paramsArray = Object.keys(params ?? {}).map(
    (key: string) => `${key}=${params![key]}`,
  );
  const url = encodeURI(`.${endpoint}?${paramsArray.join('&')}`);
  return url;
}

/**
 * Simple wrapper for POST requests that send and receive JSON.
 *
 * Based on but greatly simplified from LIT's ApiService.queryServer()
 */
export async function postJSONEndpoint(
  endpoint: string,
  payload?: object,
  params?: {[key: string]: string},
): /* tslint:disable:no-any */ Promise<any> {
  const url = makeEndpointURL(endpoint, params);
  const request = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload ?? {}),
  };
  const response = await fetch(url, request);
  const responseText = await response.text();
  if (!response.ok) {
    throw new Error(responseText);
  }

  return JSON.parse(responseText);
}

/**
 * Simple manager class for URL parameter syncing.
 *
 * Usage: create a singleton URLService, and call syncParam() once when your
 * app loads. This will set any params that were specified in the URL, and also
 * set up reactions to update the URL when the variable from furnishParamFn
 * is updated.
 */
export class URLService {
  @observable initialParams: {[key: string]: string} = {};

  constructor() {
    // Get url parameters.
    const urlSearchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlSearchParams) {
      this.initialParams[key] = decodeURIComponent(value);
    }
    console.log('URLService: URL params', toJS(this.initialParams));
  }

  syncParam<T>(
    name: string,
    decodeAndSet: (urlParam: string) => void,
    furnishParamFn: () => T,
    encodeToString: (param: T) => string,
  ) {
    // Sync once, since this is generally done on page load
    if (this.initialParams.hasOwnProperty(name)) {
      decodeAndSet(this.initialParams[name]);
    }
    // Set up reaction
    // use fireImmediately to also push the current value of the param,
    // in case it was initialized from the caller.
    reaction(
      furnishParamFn,
      (param: T) => {
        const paramAsString = encodeToString(param);
        const url = new URL(window.location.href);
        url.searchParams.set(name, paramAsString);
        window.history.pushState({}, '', url.toString());
      },
      {fireImmediately: true},
    );
  }
}

/**
 * List of matchers for input to tagMatchingSpans()
 *
 * Each is [matcher, classes], where matcher is a string (or null/undefined to
 * ignore), and classes are applied to the <span> tags for matching text.
 */
export type SpanHighlightArray = Array<
  [string | RegExp | undefined | null, string | ClassMapDirective]
>;

/**
 * Tag a segment if it matches any of the given matchers. Otherwise, just
 * return it unchanged.
 *
 * Do this as a function because returning makes it easier to break early when
 * a match is found.
 */
function maybeTagSegment(
  matchers: Array<[RegExp, string | ClassMapDirective]>,
  segment: string,
  regexMode?: string,
) {
  for (const [matcher, classes] of matchers) {
    if (segment.match(matcher) != null) {
      return html`<span class=${classes}>${segment}</span>`;
    }
  }
  return segment;
}

/**
 * Match spans in text and tag them with <span> tags with the given classes.
 */
export function tagMatchingSpans(
  text: string,
  matchers: SpanHighlightArray,
  regexMode?: string,
): TemplateResult {
  // Ignore any null matchers or an empty list, as otherwise bigRegex will split
  // the text into single characters.
  const regexMatchers: Array<[RegExp, string | ClassMapDirective]> = matchers
    .filter(([m, c]) => m != null)
    .map(([m, c]) => [RegExp(m!, regexMode), c]);
  if (regexMatchers.length === 0) return html`${text}`;

  const taggedSegments: Array<TemplateResult | string> = [];
  const bigRegex = RegExp(
    '(' + regexMatchers.map(([m, c]) => m.source).join('|') + ')',
    regexMode,
  );
  for (const segment of text.split(bigRegex)) {
    taggedSegments.push(maybeTagSegment(regexMatchers, segment, regexMode));
  }
  return html`${taggedSegments}`;
}

/**
 * Stop event propagation.
 *
 * Use e.g. if you want a global click handler (like a de-select function)
 * to be disabled over a certain area.
 */
export function stopPropagation(e: Event) {
  e.stopPropagation();
}
