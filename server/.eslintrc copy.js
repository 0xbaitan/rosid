// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:n/recommended",
    "prettier",
    "plugin:prettier/recommended", // This ensures Prettier formatting is enforced
  ],
  plugins: ["@typescript-eslint", "import", "n"],
  rules: {
    // Add or override rules here
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-console": "warn", // Example rule, adjust as needed
  },
  settings: {
    "import/resolver": {
      typescript: {}, // Resolve TypeScript modules
    },
  },
};
