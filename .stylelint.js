module.exports = {
  plugins: ["stylelint-scss"],
  extends: "stylelint-config-recommended-scss",
  syntax: "scss",
  ignoreFiles: ["**/*.ts", "**/*.js"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },

};
