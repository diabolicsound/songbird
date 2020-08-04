module.exports = {
    root: true,
    env: {
      'shared-node-browser': true,
    },
    extends: ['airbnb-base'],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
      ecmaFeatures: {
        classes: true,
      },
    },
}