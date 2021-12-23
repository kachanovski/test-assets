module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-unused-vars": "off",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "@typescript-eslint/no-unused-vars": [
      1,
      { args: "after-used", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  
};
