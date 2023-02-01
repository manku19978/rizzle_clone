module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'next'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
};
