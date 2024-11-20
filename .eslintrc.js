module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // 사용자가 설치한 버전을 자동으로 선택
    },
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "warn",
  },
};
