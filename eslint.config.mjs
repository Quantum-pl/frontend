import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

import pluginReact from 'eslint-plugin-react';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylistic
    },
    rules: {
      '@stylistic/brace-style': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/indent-binary-ops': ['error', 2],

      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],

      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/arrow-spacing': ['error', { 'before': true, 'after': true }],
      '@stylistic/array-bracket-newline': ['error', { 'multiline': true }],
      '@stylistic/array-bracket-spacing': ['error', 'never'],

      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': 'error',
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/type-generic-spacing': 'error',
      '@stylistic/type-named-tuple-spacing': 'error',

      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
      '@stylistic/keyword-spacing': ['error', { 'before': true, 'after': true }],

      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/function-paren-newline': ['error', 'consistent'],

      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/semi-style': ['error', 'last'],

      '@stylistic/eol-last': ['error', 'never'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/line-comment-position': ['error', { 'position': 'above' }],

      '@stylistic/ts/type-annotation-spacing': 'error'
    }
  },
  {
    ...pluginReact.configs.flat.recommended,
    plugins: {
      ...pluginReact.configs.flat.recommended.plugins,
      '@next/next': nextPlugin
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off'
    }
  }
];