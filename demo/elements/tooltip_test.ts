/*
 * @fileoverview A reusable tooltip element.
 *
 * @license
 * Copyright 2022-2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import 'jasmine';

import {LitElement} from 'lit';

import {LitTooltip} from './tooltip';

describe('tooltip test', () => {
  let tooltip: LitTooltip;

  beforeEach(async () => {
    tooltip = new LitTooltip();
    tooltip.content = 'Test content';
    document.body.appendChild(tooltip);
    await tooltip.updateComplete;
  });

  it('should instantiate correctly', () => {
    expect(tooltip).toBeDefined();
    expect(tooltip instanceof HTMLElement).toBeTrue();
    expect(tooltip instanceof LitElement).toBeTrue();
  });

  it('is initially hidden with correct contents', async () => {
    const tooltipText =
        tooltip.renderRoot.querySelector<HTMLSpanElement>('span.tooltip-text')!;
    expect(tooltipText).toBeDefined();
    expect(tooltipText.innerHTML).toContain('Test content');
    const style = window.getComputedStyle(tooltipText);
    expect(style.getPropertyValue('visibility')).toEqual('hidden');
    expect(tooltipText).not.toHaveClass('above');
  });

  it('conditionally renders aria label', async () => {
    expect(tooltip.renderAriaLabel()).not.toEqual(``);
    tooltip.shouldRenderAriaLabel = false;
    expect(tooltip.renderAriaLabel()).toEqual(``);
  });

  it('conditionally updates tooltip position', async () => {
    tooltip.tooltipPosition = 'above';
    await tooltip.updateComplete;
    const tooltipText =
        tooltip.renderRoot.querySelector<HTMLSpanElement>('span.tooltip-text')!;
    expect(tooltipText).toHaveClass('above');
  });

  it('does not show if disabled', async () => {
    tooltip.disabled = true;
    await tooltip.updateComplete;
    const tooltipText =
        tooltip.renderRoot.querySelector<HTMLSpanElement>('span.tooltip-text')!;
    const style = window.getComputedStyle(tooltipText);
    expect(style.getPropertyValue('visibility')).toEqual('hidden');
  });

  it('shows if forceShow', async () => {
    tooltip.forceShow = true;
    await tooltip.updateComplete;
    const tooltipText =
        tooltip.renderRoot.querySelector<HTMLSpanElement>('span.tooltip-text')!;
    const style = window.getComputedStyle(tooltipText);
    expect(style.getPropertyValue('visibility')).toEqual('visible');
  });

  it('shows if forceShow, even if disabled', async () => {
    tooltip.forceShow = true;
    tooltip.disabled = true;
    await tooltip.updateComplete;
    const tooltipText =
        tooltip.renderRoot.querySelector<HTMLSpanElement>('span.tooltip-text')!;
    const style = window.getComputedStyle(tooltipText);
    expect(style.getPropertyValue('visibility')).toEqual('visible');
  });
});
