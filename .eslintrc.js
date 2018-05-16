// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 0,
    'no-extra-semi': 0,
    'semi': [2, 'never'],
    'semi-spacing': 0,
    'comma-dangle': ["error", "only-multiline"],
    'no-shadow': ["error", { "allow": ["state"] }],
    'no-param-reassign': 0,
    'space-before-function-paren': 0,
    'global-require': 0,
    'no-console': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'dot-notation': 0,
    'func-names': 0,
    'consistent-return': 0,
    'max-len': 0,
    'eol-last': 0,
    'no-undef': 0,
    'new-cap': 0,
    'camelcase': 0,
    'guard-for-in': 0,
    'radix': 0,
    'no-restricted-syntax': 0,
    'no-extend-native': 0,
    'no-underscore-dangle': 0,
    'no-trailing-spaces': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
