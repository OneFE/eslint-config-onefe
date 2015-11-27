var deepAssign = require('deep-assign');
var airbnb = require('eslint-config-airbnb');

module.exports = deepAssign(airbnb, {
  globals: {
  },
  rules: {
    'id-length': 0,
    'prefer-const': 0,
    'react/jsx-quotes': 0,
    'jsx-quotes': [2, 'prefer-double']
  }
});
