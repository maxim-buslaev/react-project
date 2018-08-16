const path = require('path')
const root = path.resolve(__dirname, './')

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    // 'eslint:recommended',
    'prettier',
    // 'esnext',
    'plugin:import/errors',
    'plugin:import/warnings',
    // 'plugin:prettier/recommended',
    'plugin:react/recommended',
    'standard',
    'standard-react',
  ],
  plugins: ['import', 'react', 'prettier'],
  rules: {
    // 'prettier/prettier': 'error',
    'import/no-unresolved': 0,
    'import/no-namespace': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-unused-vars': 1,
    'spaced-comment': 0,
    'one-var': 0,
    'no-return-await': 0,
  },
  settings: {
    // 'import/ignore': [],
    // 'import/resolver': {
    // ['~css']: `${root}/src/css`,
    // webpack: {
    //   config: 'webpack/webpack.js',
    // },
    // },
  },
}
