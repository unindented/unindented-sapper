import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const env = {
  "process.env.NODE_ENV": JSON.stringify(mode),
  "process.env.SITE_TITLE": JSON.stringify(pkg.productName),
  "process.env.SITE_DESCRIPTION": JSON.stringify(pkg.description),
  "process.env.SITE_URL": JSON.stringify(pkg.homepage),
  "process.env.THEME_COLOR": JSON.stringify(pkg.themeColor),
  "process.env.BACKGROUND_COLOR": JSON.stringify(pkg.backgroundColor),
  "process.env.AUTHOR_NAME": JSON.stringify(pkg.author.name),
  "process.env.AUTHOR_EMAIL": JSON.stringify(pkg.author.email),
  "process.env.AUTHOR_GITHUB": JSON.stringify(pkg.author.github),
  "process.env.AUTHOR_TWITTER": JSON.stringify(pkg.author.twitter)
};

export default {
  client: {
    input: config.client.input(),
    output: { ...config.client.output(), sourcemap: true },
    plugins: [
      replace({
        "process.browser": true,
        ...env
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true
      }),
      resolve(),
      commonjs(),
      json(),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          runtimeHelpers: true,
          exclude: ["node_modules/@babel/**"],
          presets: [["@babel/preset-env"]],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true
              }
            ]
          ]
        }),

      !dev &&
        terser({
          module: true
        })
    ]
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        ...env
      }),
      commonjs(),
      json(),
      !dev && terser()
    ]
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        ...env
      }),
      svelte({
        generate: "ssr",
        dev
      }),
      resolve(),
      commonjs(),
      json()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    )
  }
};
