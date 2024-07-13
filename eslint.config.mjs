// eslint.config.js
import antfu from '@antfu/eslint-config'
import globals from 'globals'

export default antfu({
  ignores: [
    'public',
  ],
  typescript: true,
}, {
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    'no-console': 'off',
    'antfu/top-level-function': 'off',
    'curly': ['error', 'all'],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'style/no-extra-parens': ['off'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
  },
})
