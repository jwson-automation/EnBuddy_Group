module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended', // Make sure this is the last item in the array
  ],
  rules: {
    'prettier/prettier': ['error', {singleQuote: true, trailingComma: 'es5'}],
    // Other ESLint rules can be added here
  },
};
