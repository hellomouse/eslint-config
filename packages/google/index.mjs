/**
 * Copyright 2016 Google Inc. All rights reserved.
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

// The intent of this file is to stay true as much as possible to the Google styleguide while upgrading to the latest standards and best practices for ESLint
import jsdoc from 'eslint-plugin-jsdoc';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    plugins: {
      'jsdoc': jsdoc,
      '@stylistic': stylistic,
      'import': importPlugin
    },
    rules: {
      // The rules below are listed in the order they appear on the eslint
      // rules page. All rules are listed to make it easier to keep in sync
      // as new ESLint rules are added.
      // http://eslint.org/docs/rules/
      // - Rules in the `eslint:recommended` ruleset that aren't specifically
      //   mentioned by the google styleguide are listed but commented out (so
      //   they don't override a base ruleset).
      // - Rules that are recommended but contradict the Google styleguide
      //   are explicitely set to the Google styleguide value.
      // Possible Problems
      // http://eslint.org/docs/rules/#possible-problems
      // ---------------------------------------------
      // 'array-callback-return': 0,
      'constructor-super': 2, // eslint:recommended

      // 'for-direction': 2, // eslint:recommended
      // 'getter-return': 2, // eslint:recommended
      // 'no-async-promise-executor': 2, // eslint:recommended
      // 'no-await-in-loop': 0,
      // 'no-class-assign': 2, // eslint:recommended
      // 'no-compare-neg-zero': 2, // eslint:recommended
      'no-cond-assign': 0, // eslint:recommended

      // 'no-const-assign': 2, // eslint:recommended
      // 'no-constant-binary-expression': 0,
      // 'no-constant-condition': 2, // eslint:recommended
      // 'no-constructor-return': 0,
      // 'no-control-regex': 2, // eslint:recommended
      // 'no-debugger': 2, // eslint:recommended
      // 'no-dupe-args': 2, // eslint:recommended
      // 'no-dupe-class-members': 2, // eslint:recommended
      // 'no-dupe-else-if': 2, // eslint:recommended
      // 'no-dupe-keys': 2, // eslint:recommended
      // 'no-duplicate-case': 2, // eslint:recommended
      // 'no-duplicate-imports': 0,
      // 'no-empty-character-class': 2, // eslint:recommended
      // 'no-empty-pattern': 2, // eslint:recommended
      // 'no-ex-assign': 2, // eslint:recommended
      // 'no-fallthrough': 2, // eslint:recommended
      // 'no-func-assign': 2, // eslint:recommended
      // 'no-import-assign': 2, // eslint:recommended
      // 'no-inner-declarations': 2, // eslint:recommended
      // 'no-invalid-regexp': 2, // eslint:recommended
      'no-irregular-whitespace': 2, // eslint:recommended

      // 'no-loss-of-precision': 2, // eslint:recommended
      // 'no-misleading-character-class': 2, // eslint:recommended
      // 'no-new-native-nonconstructor': 0,
      'no-new-symbol': 2, // eslint:recommended

      // 'no-obj-calls': 2, // eslint:recommended
      // 'no-promise-executor-return': 0,
      // 'no-prototype-builtins': 2, // eslint:recommended
      // 'no-self-assign': 2, // eslint:recommended
      // 'no-self-compare': 0,
      // 'no-setter-return': 2, // eslint:recommended
      // 'no-sparse-arrays': 2, // eslint:recommended
      // 'no-template-curly-in-string': 0,
      'no-this-before-super': 2, // eslint:recommended

      // 'no-undef': 2, // eslint:recommended
      'no-unexpected-multiline': 2, // eslint:recommended

      // 'no-unmodified-loop-condition': 0,
      // 'no-unreachable': 2, // eslint:recommended
      // 'no-unreachable-loop': 0,
      // 'no-unsafe-finally': 2, // eslint:recommended
      // 'no-unsafe-negation': 2, // eslint:recommended
      // 'no-unsafe-optional-chaining': 2, // eslint:recommended
      // 'no-unused-private-class-members': 0,
      'no-unused-vars': [2, { args: 'none' }], // eslint:recommended

      // 'no-use-before-define': 0,
      // 'no-useless-backreference': 2, // eslint:recommended
      // 'require-atomic-updates': 0,
      // 'use-isnan': 2, // eslint:recommended
      // 'valid-typeof': 2, // eslint:recommended
      // Suggestions
      // http://eslint.org/docs/rules/#suggestions
      // ---------------------------------------------
      // 'accessor-pairs': 0,
      // 'arrow-body-style': 0,
      // 'block-scoped-var': 0,
      'camelcase': [2, { properties: 'never' }],
      // 'capitalized-comments': 0,
      // 'class-methods-use-this': 0,
      // 'complexity': 0,
      // 'consistent-return': 0,
      // 'consistent-this': 0,
      'curly': [2, 'multi-line'],
      // 'default-case': 0,
      // 'default-case-last': 0,
      // 'default-param-last': 0,
      // 'dot-notation': 0,
      'eqeqeq': 2,
      // 'func-name-matching': 0,
      // 'func-names': 0,
      // 'func-style': 0,
      // 'grouped-accessor-pairs': 0,
      'guard-for-in': 2,
      // 'id-denylist': 0,
      // 'id-length': 0,
      // 'id-match': 0,
      // 'init-declarations': 0,
      // 'logical-assignment-operators': 0,
      // 'max-classes-per-file': 0,
      // 'max-depth': 0,
      // 'max-lines': 0,
      // 'max-lines-per-function': 0,
      // 'max-nested-callbacks': 0,
      // 'max-params': 0,
      // 'max-statements': 0,
      // 'multiline-comment-style': 0,
      'new-cap': 2,
      // 'no-alert': 0,
      'no-array-constructor': 2,
      // 'no-bitwise': 0,
      'no-caller': 2,
      // 'no-case-declarations': 2, // eslint:recommended
      // 'no-console': 0,
      // 'no-continue': 0,
      // 'no-delete-var': 2, // eslint:recommended
      // 'no-div-regex': 0,
      // 'no-else-return': 0,
      // 'no-empty': 2, // eslint:recommended
      // 'no-empty-function': 0,
      // 'no-empty-static-block': 0,
      // 'no-eq-null': 0,
      // 'no-eval': 0,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      // 'no-extra-boolean-cast': 2, // eslint:recommended
      // 'no-extra-label': 0,
      // 'no-global-assign': 2, // eslint:recommended
      // 'no-implicit-coercion': 0,
      // 'no-implicit-globals': 0,
      // 'no-implied-eval': 0,
      // 'no-inline-comments': 0,
      'no-invalid-this': 2,
      // 'no-iterator': 0,
      // 'no-label-var': 0,
      // 'no-labels': 0,
      // 'no-lone-blocks': 0,
      // 'no-lonely-if': 0,
      // 'no-loop-func': 0,
      // 'no-magic-numbers': 0,
      // 'no-multi-assign': 0,
      'no-multi-str': 2,
      // 'no-negated-condition': 0,
      // 'no-nested-ternary': 0,
      // 'no-new': 0,
      // 'no-new-func': 0,
      'no-new-wrappers': 2,
      // 'no-nonoctal-decimal-escape': 2, // eslint:recommended
      // 'no-object-constructor': 0,
      // 'no-octal': 2, // eslint:recommended
      // 'no-octal-escape': 0,
      // 'no-param-reassign': 0,
      // 'no-plusplus': 0,
      // 'no-proto': 0,
      // 'no-redeclare': 2, // eslint:recommended
      // 'no-regex-spaces': 2, // eslint:recommended
      // 'no-restricted-exports': 0,
      // 'no-restricted-globals': 0,
      // 'no-restricted-imports': 0,
      // 'no-restricted-properties': 0,
      // 'no-restricted-syntax': 0,
      // 'no-return-assign': 0,
      // 'no-script-url': 0,
      // 'no-sequences': 0,
      // 'no-shadow': 0,
      // 'no-shadow-restricted-names': 2, // eslint:recommended
      // 'no-ternary': 0,
      'no-throw-literal': 2,
      // 'no-undef-init': 0,
      // 'no-undefined': 0,
      // 'no-underscore-dangle': 0,
      // 'no-unneeded-ternary': 0,
      // 'no-unused-expressions': 0,
      // 'no-unused-labels': 2, // eslint:recommended
      // 'no-useless-call': 0,
      // 'no-useless-catch': 2, // eslint:recommended
      // 'no-useless-computed-key': 0,
      // 'no-useless-concat': 0,
      // 'no-useless-constructor': 0,
      // 'no-useless-escape': 2, // eslint:recommended
      // 'no-useless-rename': 0,
      // 'no-useless-return': 0,
      'no-var': 2,
      // 'no-void': 0,
      // 'no-warning-comments': 0,
      'no-with': 2, // eslint:recommended

      // 'object-shorthand': 0,
      'one-var': [
        2,
        {
          var: 'never',
          let: 'never',
          const: 'never'
        }
      ],
      // 'operator-assignment': 0,
      // 'prefer-arrow-callback': 0,
      'prefer-const': [2, { destructuring: 'all' }],
      // 'prefer-destructuring': 0,
      // 'prefer-exponentiation-operator': 0,
      // 'prefer-named-capture-group': 0,
      // 'prefer-numeric-literals': 0,
      // 'prefer-object-has-own': 0,
      // 'prefer-object-spread': 0,
      'prefer-promise-reject-errors': 2,
      // 'prefer-regex-literals': 0,
      'prefer-rest-params': 2,
      'prefer-spread': 2,
      // 'prefer-template': 0,
      // 'radix': 0,
      // 'require-await': 0,
      // 'require-unicode-regexp': 0,
      // 'require-yield': 2, // eslint:recommended
      // 'sort-imports': 0,
      // 'sort-keys': 0,
      // 'sort-vars': 0,
      // 'strict': 0,
      // 'symbol-description': 0,
      // 'vars-on-top': 0,
      // 'yoda': 0
      // Layout & Formatting
      // http://eslint.org/docs/rules/#layout--formatting
      // ---------------------------------------------
      // 'line-comment-position': 0,
      // 'unicode-bom': 0,
      // Stylistic Issues
      // https://eslint.style/packages/js#rules
      // ---------------------------------------------
      '@stylistic/array-bracket-newline': 0,
      '@stylistic/array-bracket-spacing': [2, 'never'],
      '@stylistic/array-element-newline': 0,
      '@stylistic/arrow-parens': [2, 'always'],
      // '@stylistic/arrow-spacing': 0,
      '@stylistic/block-spacing': [2, 'never'],
      '@stylistic/brace-style': 2,
      '@stylistic/comma-dangle': [2, 'always-multiline'],
      '@stylistic/comma-spacing': 2,
      '@stylistic/comma-style': 2,
      '@stylistic/computed-property-spacing': 2,
      // '@stylistic/dot-location': 0,
      '@stylistic/eol-last': 2,
      '@stylistic/func-call-spacing': 2,
      // '@stylistic/function-call-argument-newline': 0,
      // '@stylistic/function-call-spacing': 0,
      // '@stylistic/function-paren-newline': 0,
      '@stylistic/generator-star-spacing': [2, 'after'],
      // '@stylistic/implicit-arrow-linebreak': 0,
      '@stylistic/indent': [
        2,
        2,
        {
          CallExpression: {
            arguments: 2
          },
          FunctionDeclaration: {
            body: 1,
            parameters: 2
          },
          FunctionExpression: {
            body: 1,
            parameters: 2
          },
          MemberExpression: 2,
          ObjectExpression: 1,
          SwitchCase: 1,
          ignoredNodes: ['ConditionalExpression']
        }
      ],
      // '@stylistic/jsx-quotes': 0,
      '@stylistic/key-spacing': 2,
      '@stylistic/keyword-spacing': 2,
      '@stylistic/linebreak-style': 2,
      // '@stylistic/lines-around-comment': 0,
      // '@stylistic/lines-between-class-members': 0,
      '@stylistic/max-len': [
        2,
        {
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,
          ignorePattern: 'goog.(module|require)'
        }
      ],
      // '@stylistic/max-statements-per-line': 0,
      // '@stylistic/multiline-ternary': 0,
      // '@stylistic/new-parens': 0,
      // '@stylistic/newline-per-chained-call': 0,
      // '@stylistic/no-confusing-arrow': 0,
      // '@stylistic/no-extra-parens': 0,
      // '@stylistic/no-extra-semi': 0,
      // '@stylistic/no-floating-decimal': 0,
      // '@stylistic/no-mixed-operators': 0,
      '@stylistic/no-mixed-spaces-and-tabs': 2,
      // '@stylistic/no-multi-spaces': 0,
      '@stylistic/no-multiple-empty-lines': 2,
      '@stylistic/no-tabs': 2,
      '@stylistic/no-trailing-spaces': 0,
      // '@stylistic/no-whitespace-before-property': 0,
      // '@stylistic/nonblock-statement-body-position': 0,
      // '@stylistic/object-curly-newline': 0,
      '@stylistic/object-curly-spacing': 2,
      // '@stylistic/object-property-newline': 0,
      // '@stylistic/one-var-declaration-per-line': 0,
      '@stylistic/operator-linebreak': [2, 'after'],
      '@stylistic/padded-blocks': [2, 'never'],
      // '@stylistic/padding-line-between-statements': 0,
      '@stylistic/quote-props': [2, 'consistent'],
      '@stylistic/quotes': [2, 'single', { allowTemplateLiterals: true }],
      '@stylistic/rest-spread-spacing': 2,
      '@stylistic/semi': 2,
      '@stylistic/semi-spacing': 2,
      // '@stylistic/semi-style': 0,
      '@stylistic/space-before-blocks': 2,
      '@stylistic/space-before-function-paren': [
        2,
        {
          asyncArrow: 'always',
          anonymous: 'never',
          named: 'never'
        }
      ],
      // '@stylistic/space-in-parens': 0,
      // '@stylistic/space-infix-ops': 0,
      // '@stylistic/space-unary-ops': 0,
      '@stylistic/spaced-comment': [2, 'always'],
      '@stylistic/switch-colon-spacing': 2,
      // '@stylistic/template-curly-spacing': 0,
      // '@stylistic/template-tag-spacing': 0,
      // '@stylistic/wrap-iife': 0,
      // '@stylistic/wrap-regex': 0,
      '@stylistic/yield-star-spacing': [2, 'after'],

      // JSDoc (equivalency to the deprecated `valid-jsdoc` rule)
      // https://github.com/gajus/eslint-plugin-jsdoc#rules
      // ---------------------------------------------
      'jsdoc/require-jsdoc': 2,
      'jsdoc/require-param-description': 0,
      'jsdoc/require-returns-description': 0,
      'jsdoc/require-returns': 0,

      'import/extensions': ['error', { js: 'always' }]
    },
    settings: {
      jsdoc: {
        tagNamePreference: {
          returns: { replacement: 'return' }
        }
      }
    }
  }
];
