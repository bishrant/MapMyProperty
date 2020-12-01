module.exports = {
  plugins: ['stylelint-scss'],
  "extends": "stylelint-config-sass-guidelines",
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
  "ignoreFiles": ["**/*.js"]
};
