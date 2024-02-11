module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-unused-vars": ["warn"],
    "no-constant-condition": "warn",
    "react/prop-types": "off",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
    // Add TypeScript-specific rules
    "@typescript-eslint/no-unused-vars": ["warn"],
    // Add other TypeScript-specific rules if needed
  },
};
