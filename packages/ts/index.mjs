import js from '@eslint/js';
import google from '@hellomouse/eslint-config-google';
import jsdoc from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  tseslint.configs.eslintRecommended,
  google,
  ...tseslint.configs.recommended,
  jsdoc.configs['flat/recommended-typescript'],
  stylistic.configs['disable-legacy'],
  {
    languageOptions: {
      parser: tseslint.parser
    },
    // jsdoc and stylistic plugins already defined in Google
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      // Naming conventions
      'camelcase': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'default', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'], leadingUnderscore: 'allow' },
        { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'memberLike', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'enumMember', format: ['PascalCase'] }
      ],

      // any exists for a reason
      '@typescript-eslint/no-explicit-any': 'off',

      // this rule only makes it more complicated to do @ts-ignore:
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      '@typescript-eslint/ban-ts-comment': 'off',

      // the return type for some functions is rather obvious and need not be stated explicitly
      '@typescript-eslint/explicit-function-return-type': 'off',

      // highly subjective: dangling commas feel weird,
      '@stylistic/comma-dangle': ['error', 'never'],

      // so you can do n => +n instead of (n) => +n
      '@stylistic/arrow-parens': ['error', 'as-needed'],

      // 2 spaces for indent
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],

      // console.log() is often used in node.js
      'no-console': 'off',

      // spaces after curly brackets look cleaner ({a: 4} vs { a: 4 })
      // also done by util.inspect
      '@stylistic/object-curly-spacing': ['error', 'always'],

      // a + b rather than a+b, but allow integer hints to not have spaces (eg. b|0)
      '@stylistic/space-infix-ops': ['error', { int32Hint: true }],

      // lines should generally be kept short but definitely shouldn't be over 120 characters
      // allow long strings and regexes though
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }],

      // == has weird behavior with types, always use === instead
      'eqeqeq': ['error', 'always'],

      // errors due to unintentional reassigning generally are quite rare, in addition,
      // changing from const to let is a bit annoying
      'prefer-const': 'off',

      // allow while (true)
      'no-constant-condition': ['error', { checkLoops: false }],

      // require operators to go after the line, except for ternary (?/:)
      '@stylistic/operator-linebreak': ['error', 'after', {
        overrides: { '?': 'before', ':': 'before' }
      }],

      // would you rather type
      // if (!thing) throw new Error('the thing is null')
      // every time
      '@typescript-eslint/no-non-null-assertion': 'off',

      // sometimes it is necessary to export functions with any
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // empty functions are needed sometimes
      '@typescript-eslint/no-empty-function': 'off',

      // Enforce use of the semicolon in `interfaces` and `type` literals
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'comma',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true
            },
            singleline: {
              delimiter: 'semi',
              requireLast: true
            }
          }
        }
      }],
      // descriptions on params and return is often redundant
      // for example:
      /*
      * Adds given numbers
      *
      * @param {Number} a First number
      * @param {Number} b Second number
      * @return {Number} The result of the operation
      */
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns-description': 'off',

      // not everything needs to be a complete sentence
      'jsdoc/require-description-complete-sentence': 'off',

      // most things explain themselves
      'jsdoc/require-example': 'off',

      // don't worry about whether a newline exists after jsdoc description
      'jsdoc/newline-after-description': 'off',

      /*
      * Overrides to Google rules with their @typescript-eslint equivalents
      */
      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': 'error',

      'no-throw-literal': 'off',
      '@typescript-eslint/only-throw-error': 'error',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],

      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error'
    },
    settings: {
      jsdoc: {
        tagNamePreference: {
          // keep the ones currently in use
          returns: { replacement: 'return' },
          yields: { replacement: 'yield' },
          augments: { replacement: 'extends' }
        }
      }
    }
  }];
