module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: [
        ['@components', './src/components'],
        ['@layouts', './src/layouts'],
        ['@images', './src/images'],
        ['@fonts', './src/fonts'],
      ],
    },
  },
  rules: {
    // Typescript rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // React/JSX rules
    'react/prop-types': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/control-has-associated-label': [
      'warn',
      {
        ignoreElements: [
          'audio',
          'canvas',
          'embed',
          'input',
          'textarea',
          'tr',
          'video',
        ],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        includeRoles: ['alert', 'dialog'],
      },
    ],
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/html-has-lang': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/interactive-supports-focus': [
      'warn',
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'progressbar',
          'searchbox',
          'slider',
          'spinbutton',
          'switch',
          'textbox',
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/lang': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn',
    // Generic rules
    'no-console': 'warn',
    quotes: [2, 'single', { avoidEscape: true }],
    'eol-last': 'error',
    'object-curly-spacing': ['error', 'always'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ObjectExpression: 'off',
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'prettier/prettier': ['error'],
  },
}
