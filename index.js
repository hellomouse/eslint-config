module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint-config-google',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended-typescript'
  ],
  plugins: ['jsdoc', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
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

    // this rule does not understand jsdoc in typescript
    'valid-jsdoc': 'off',

    // disable eslint/comma-dangle as there is an extended version of it designed for TS
    'comma-dangle': 'off',

    // highly subjective: dangling commas feel weird,
    '@typescript-eslint/comma-dangle': ['error', 'never'],

    // so you can do n => +n instead of (n) => +n
    'arrow-parens': ['error', 'as-needed'],

    // 2 spaces for indent
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],

    // disable eslint/indent as it doesn't work for typescript
    'indent': 'off',

    // console.log() is often used in node.js
    'no-console': 'off',

    // disable eslint/object-curly-spacing as there is an extended version of it designed for TS
    'object-curly-spacing': 'off',

    // spaces after curly brackets look cleaner ({a: 4} vs { a: 4 })
    // also done by util.inspect
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // disable eslint/space-infix-ops as there is an extended version of it designed for TS
    'space-infix-ops': 'off',

    // a + b rather than a+b, but allow integer hints to not have spaces (eg. b|0)
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: true }],

    // lines should generally be kept short but definitely shouldn't be over 120 characters
    // allow long strings and regexes though
    'max-len': ['error', {
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

    // use jsdoc/require-jsdoc instead
    'require-jsdoc': 'off',

    // allow while (true)
    'no-constant-condition': ['error', { checkLoops: false }],

    // require operators to go after the line, except for ternary (?/:)
    'operator-linebreak': ['error', 'after', {
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
    '@typescript-eslint/member-delimiter-style': 'error',
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

    'semi': 'off',
    '@typescript-eslint/semi': 'error',

    'quotes': 'off',
    '@typescript-eslint/quotes': [2, 'single', { allowTemplateLiterals: true }],

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error',

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never'
    }]
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
};
