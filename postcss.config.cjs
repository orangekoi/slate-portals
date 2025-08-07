const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");
const importCSS = require("postcss-import");
const postcssCustomMedia = require("postcss-custom-media");
const postcssGlobalData = require("@csstools/postcss-global-data");
const postcssNormalize = require("postcss-normalize");
const postcssNesting = require("postcss-nesting"); // ✅ Add this

module.exports = {
  plugins: [
    importCSS(),
    postcssGlobalData({
      files: ["./src/patterns/base/breakpoints/breakpoints.css"],
    }),

    // ✅ Add nesting support here, before preset-env
    postcssNesting(),

    postcssPresetEnv({
      stage: 2,
      features: {
        "custom-media-queries": { preserve: false },
      },
    }),

    postcssCustomMedia(),
    postcssNormalize(),
    cssnano({
      preset: "default",
    }),
  ],
};
