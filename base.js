var deepAssign = require('deep-assign');
var airbnb = require('eslint-config-airbnb/base');

module.exports = deepAssign(airbnb, {
  globals: {
  },
  rules: {
    'id-length': 0,
    'prefer-const': 0
  }
});
