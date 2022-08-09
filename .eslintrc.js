module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'max-len': [1, { code: 100 }],
    // 'no-console': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
  //Warning: React version not specified in eslint-plugin-react settings
  settings: {
    react: {
      version: 'detect',
    },
  },
}
