module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/unified-signatures": "error",
        "arrow-parens": [
            "off",
            "as-needed"
        ],
        "camelcase": "error",
        "comma-dangle": 1,
        "complexity": "off",
        "constructor-super": "error",
        "dot-notation": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "import/no-deprecated": "warn",
        "import/order": "off",
        "max-classes-per-file": "off",
        "max-len": [
            "error",
            {
                "code": 140
            }
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "log",
                    "dirxml",
                    "warn",
                    "error",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupCollapsed",
                    "groupEnd",
                    "table",
                    "Console",
                    "markTimeline",
                    "profile",
                    "profileEnd",
                    "timeline",
                    "timelineEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "error",
        "no-restricted-imports": [
            "error",
            "rxjs/Rx"
        ],
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow-callback": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "radix": "error",
        "spaced-comment": "error",
        "use-isnan": "error",
        "valid-typeof": "off",
    }
};
