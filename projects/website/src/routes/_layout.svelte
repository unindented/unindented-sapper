<script>
  import LayoutFooter from "../components/LayoutFooter.svelte";
  import LayoutHeader from "../components/LayoutHeader.svelte";
  import {
    siteDescription,
    themeColor,
    backgroundColor
  } from "../utils/metadata";

  export let segment;
</script>

<svelte:head>
  <meta name="description" content="{siteDescription}" />
  <meta name="theme-color" content="{themeColor}" />
  <meta name="background-color" content="{backgroundColor}" />
</svelte:head>

<LayoutHeader {segment} />
<main id="main" class="grid-full">
  <slot></slot>
</main>
<LayoutFooter />

<style>
  /* Custom properties
     ========================================================================== */

  :root {
    /**
     * Font families.
     */

    --font-family-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;

    /**
     * Font scales (major-third).
     */

    --font-scale-base: 1;
    --font-scale-1: 1 * 5/4 * 5/4 * 5/4 * 5/4;
    --font-scale-2: 1 * 5/4 * 5/4 * 5/4;
    --font-scale-3: 1 * 5/4 * 5/4;
    --font-scale-4: 1 * 5/4;
    --font-scale-5: 1;
    --font-scale-6: 1 * 4/5;

    /**
     * Fluid typography ranges.
     */

    --fluid-base-min-font-size: 16;
    --fluid-base-max-font-size: calc(
      var(--fluid-base-min-font-size) * 5 / 4 * 5 / 4
    );

    --fluid-hero-min-font-size: calc(
      var(--fluid-base-min-font-size) * 5 / 4 * 5 / 4 * 5 / 4 * 5 / 4 * 5 / 4 *
        5 / 4 * 5 / 4
    );
    --fluid-hero-max-font-size: calc(
      var(--fluid-hero-min-font-size) * 5 / 4 * 5 / 4 * 5 / 4 * 5 / 4
    );

    --fluid-min-screen-size: 480;
    --fluid-max-screen-size: 1600;

    /**
     * Spacing.
     */

    --space-xs: 0.25rem;
    --space-s: 0.5rem;
    --space-m: 1rem;
    --space-l: 1.5rem;
    --space-xl: 2rem;

    --border-radius: 0.25rem;

    --border-width-s: 0.125rem;
    --border-width-l: 0.25rem;

    /**
     * Color palette.
     */

    --color-white: #ffffff;
    --color-black: #1d1f24;

    --color-blue-10: #f0f5fc;
    --color-blue-20: #cfe0fc;
    --color-blue-30: #accbfc;
    --color-blue-40: #84b1fa;
    --color-blue-50: #5691f0;
    --color-blue-60: #3272d9;
    --color-blue-70: #1d5bbf;
    --color-blue-80: #114599;
    --color-blue-90: #103570;
    --color-blue-100: #15233b;

    --color-bronze-10: #fcf2e6;
    --color-bronze-20: #fad8af;
    --color-bronze-30: #f5bc76;
    --color-bronze-40: #e89c3f;
    --color-bronze-50: #cf7911;
    --color-bronze-60: #ad5f00;
    --color-bronze-70: #8a4d03;
    --color-bronze-80: #693d07;
    --color-bronze-90: #4d2f0b;
    --color-bronze-100: #33210c;

    --color-dusk-10: #f4f2f7;
    --color-dusk-20: #e3dcf7;
    --color-dusk-30: #cec2f0;
    --color-dusk-40: #b5a6e3;
    --color-dusk-50: #9886cf;
    --color-dusk-60: #7a68b3;
    --color-dusk-70: #645396;
    --color-dusk-80: #4f4178;
    --color-dusk-90: #3a3154;
    --color-dusk-100: #282436;

    --color-gray-10: #f5f7fa;
    --color-gray-20: #ebeff5;
    --color-gray-30: #dde3ed;
    --color-gray-40: #c8d1e0;
    --color-gray-50: #afbacc;
    --color-gray-60: #8e99ab;
    --color-gray-70: #707a8a;
    --color-gray-80: #58606e;
    --color-gray-90: #434a54;
    --color-gray-100: #333840;

    --color-green-10: #e1faeb;
    --color-green-20: #abedc5;
    --color-green-30: #7ddba3;
    --color-green-40: #57c282;
    --color-green-50: #3ba164;
    --color-green-60: #2a854e;
    --color-green-70: #20693d;
    --color-green-80: #1a5230;
    --color-green-90: #153d25;
    --color-green-100: #112b1b;

    --color-indigo-10: #f2f2fc;
    --color-indigo-20: #dcdcfc;
    --color-indigo-30: #c2c2fc;
    --color-indigo-40: #a7a7fa;
    --color-indigo-50: #8585f2;
    --color-indigo-60: #6767e6;
    --color-indigo-70: #4d4dd1;
    --color-indigo-80: #3737b3;
    --color-indigo-90: #28288a;
    --color-indigo-100: #202057;

    --color-magenta-10: #faf0f4;
    --color-magenta-20: #fad4e4;
    --color-magenta-30: #fab4d1;
    --color-magenta-40: #f78bb8;
    --color-magenta-50: #ed5393;
    --color-magenta-60: #d6246e;
    --color-magenta-70: #b01355;
    --color-magenta-80: #8a1244;
    --color-magenta-90: #611535;
    --color-magenta-100: #421527;

    --color-purple-10: #f5f0fa;
    --color-purple-20: #ead9fa;
    --color-purple-30: #dabcf7;
    --color-purple-40: #c79bf2;
    --color-purple-50: #ae74e8;
    --color-purple-60: #9656d6;
    --color-purple-70: #7d3cbd;
    --color-purple-80: #642b9e;
    --color-purple-90: #4b2175;
    --color-purple-100: #371c52;

    --color-red-10: #faf0f0;
    --color-red-20: #fad4d4;
    --color-red-30: #fab6b6;
    --color-red-40: #fa8e8e;
    --color-red-50: #f55353;
    --color-red-60: #de1b1b;
    --color-red-70: #b80d0d;
    --color-red-80: #8f0e0e;
    --color-red-90: #661414;
    --color-red-100: #451717;

    --color-sky-10: #e8f4fa;
    --color-sky-20: #bbe5fa;
    --color-sky-30: #8dd4f7;
    --color-sky-40: #53baed;
    --color-sky-50: #229ad6;
    --color-sky-60: #0c7bb3;
    --color-sky-70: #066391;
    --color-sky-80: #064d70;
    --color-sky-90: #093952;
    --color-sky-100: #0c2938;

    --color-slate-10: #edf4f7;
    --color-slate-20: #cbe3f5;
    --color-slate-30: #a7ceeb;
    --color-slate-40: #84b7db;
    --color-slate-50: #5e95bd;
    --color-slate-60: #48799c;
    --color-slate-70: #376180;
    --color-slate-80: #2d4d63;
    --color-slate-90: #243947;
    --color-slate-100: #1d2830;

    --color-teal-10: #e4f7f6;
    --color-teal-20: #a8ede9;
    --color-teal-30: #6cd9d2;
    --color-teal-40: #45bfb7;
    --color-teal-50: #28a199;
    --color-teal-60: #17827b;
    --color-teal-70: #116963;
    --color-teal-80: #0d524d;
    --color-teal-90: #0b3d3a;
    --color-teal-100: #092b29;
  }

  /**
   * Normal color scheme.
   */

  :root {
    --color-background: var(--color-white);
    --color-foreground: var(--color-black);

    --color-accent-background-1: var(--color-blue-90);
    --color-accent-background-2: var(--color-purple-80);
    --color-accent-foreground: var(--color-white);

    --color-subtle-background: var(--color-gray-10);
    --color-subtle-foreground: var(--color-black);

    --color-link: var(--color-blue-80);
    --color-link-hover: var(--color-blue-60);

    --color-accent-link: var(--color-white);
    --color-accent-link-hover: var(--color-blue-20);

    --color-border: var(--color-gray-60);

    --color-code-comment: var(--color-gray-60);
    --color-code-meta: var(--color-gray-60);
    --color-code-keyword: var(--color-gray-100);
    --color-code-tag: var(--color-blue-80);
    --color-code-title: var(--color-red-70);
    --color-code-type: var(--color-sky-70);
    --color-code-built-in: var(--color-teal-60);
    --color-code-number: var(--color-sky-60);
    --color-code-regexp: var(--color-green-60);
    --color-code-string: var(--color-red-60);
    --color-code-symbol: var(--color-magenta-60);
    --color-code-addition: var(--color-green-40);
    --color-code-deletion: var(--color-red-40);
  }

  /* Document
     ========================================================================== */

  /**
   * Reset box sizing.
   */

  :global(html) {
    box-sizing: border-box;
  }

  :global(*),
  :global(*):before,
  :global(*):after {
    box-sizing: inherit;
  }

  /**
   * 1. Adjust font properties in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */

  :global(html) {
    font-family: var(--font-family-body); /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /**
   * Make typography fluid for bigger displays.
   * https://www.smashingmagazine.com/2016/05/fluid-typography/
   */

  @media (min-width: 30em) {
    :global(html) {
      font-size: calc(
        (var(--fluid-base-min-font-size) * 1px) +
          (var(--fluid-base-max-font-size) - var(--fluid-base-min-font-size)) *
          (100vw - (var(--fluid-min-screen-size) * 1px)) /
          (var(--fluid-max-screen-size) - var(--fluid-min-screen-size))
      );
    }
  }

  /**
   * Disable smooth scrolling if user prefers reduced motion.
   */

  :global(html) {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduced) {
    :global(html) {
      scroll-behavior: auto;
    }
  }

  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  :global(body) {
    margin: 0;
  }

  /**
   * Render the `main` element consistently in IE.
   */

  :global(main) {
    display: block;
  }

  /**
   * Correct the font size and margin on `h1` elements within `section` and
   * `article` contexts in Chrome, Firefox, and Safari.
   */

  :global(h1) {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  :global(hr) {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */

  :global(pre) {
    font-family: var(--font-family-code); /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  :global(a) {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  :global(abbr[title]) {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  :global(b),
  :global(strong) {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */

  :global(code),
  :global(kbd),
  :global(samp) {
    font-family: var(--font-family-code); /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  :global(small) {
    font-size: 80%;
  }

  /**
   * Prevent `sub` and `sup` elements from affecting the line height in
   * all browsers.
   */

  :global(sub),
  :global(sup) {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  :global(sub) {
    bottom: -0.25em;
  }

  :global(sup) {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  :global(img) {
    border-style: none;
  }

  /* Interactive
     ========================================================================== */

  /**
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

  :global(details) {
    display: block;
  }

  /**
   * Add the correct display in all browsers.
   */

  :global(summary) {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */

  :global(template) {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  :global([hidden]) {
    display: none;
  }

  /* Accessibility styles
     ========================================================================== */

  :global(.sr-only) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  :global(.sr-only-focusable:active),
  :global(.sr-only-focusable:focus) {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  /* Grid styles
     ========================================================================== */

  :global(#root) {
    display: grid;
    grid-template-columns:
      [full-start] minmax(1em, 1fr) [main-start] minmax(0, 40em)
      [main-end] minmax(1em, 1fr) [full-end];
    grid-template-rows: min-content auto min-content;
    min-height: 100vh;
  }

  :global(.grid-full) {
    display: inherit;
    grid-column: full !important;
    grid-template-columns: inherit;
  }

  :global(.grid-main) {
    grid-column: main !important;
  }

  /* Misc styles
     ========================================================================== */

  :global(html) {
    background-color: var(--color-black);
  }

  :global(body) {
    background-color: var(--color-background);
    color: var(--color-foreground);
  }
</style>
