const pluginImport = require('eslint-plugin-import');

module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'coverage/**'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
];

