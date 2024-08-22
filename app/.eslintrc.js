// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest',
  ],

  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    // Add or override rules here
  },
};
