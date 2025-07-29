import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  regexp: false,
  type: 'lib',
  rules: {
    'no-useless-return': 'off',
    'antfu/if-newline': 'off',
    'style/quote-props': 'off',
    'react/prefer-destructuring-assignment': 'off',
    'style/brace-style': 'off',
    'react/no-unstable-context-value': 'off',
    'react/no-children-for-each': 'off',
    'regexp/no-unused-capturing-group': 'off',
    'test/consistent-test-it': 'off',
    'node/prefer-global/process': 'off',
    'ts/explicit-function-return-type': 'off',
  },
  ignores: ['.github/*'],
});
