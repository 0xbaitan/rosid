// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/namespace': 'off',
    'import/no-duplicates': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'no-missing-import': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Ensure TypeScript module resolution
    },
  },
};
