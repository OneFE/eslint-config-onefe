# eslint-config-onefe

[![NPM version][npm-badge]][npm] [![Build Status][travis-ci-image]][travis-ci-url]

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [OneFE](https://github.com/OneFE) JavaScript style guide

## Usage

We export three ESLint configurations for your usage.

### eslint-config-onefe

Our default export contains all of our ESLint rules, including EcmaScript 6+ and React. It requires `eslint`, `eslint-plugin-react` and `eslint-config-airbnb`.

1. `npm install --save-dev eslint-config-onefe eslint-config-airbnb eslint-plugin-react eslint`
1. add `"extends": "onefe"` to your .eslintrc

### eslint-config-onefe/base

Lints ES6+ but does not lint React. Requires `eslint` and `eslint-config-airbnb`.

1. `npm install --save-dev eslint-config-onefe eslint-config-airbnb eslint`
1. add `"extends": "onefe/base"` to your .eslintrc

### eslint-config-onefe/legacy

Lints ES5 and below. Only requires `eslint` and `eslint-config-airbnb`.

1. `npm install --save-dev eslint-config-onefe eslint-config-airbnb eslint`
1. add `"extends": "onefe/legacy"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

[npm-badge]: http://badge.fury.io/js/eslint-config-onefe.svg
[npm]: https://www.npmjs.com/package/eslint-config-onefe

[deps-badge]: https://david-dm.org/OneFE/eslint-config-onefe.svg
[deps]: https://david-dm.org/OneFE/eslint-config-onefe

[dev-deps-badge]: https://david-dm.org/OneFE/eslint-config-onefe/dev-status.svg
[dev-deps]: https://david-dm.org/OneFE/eslint-config-onefe#info=devDependencies

[peer-deps-badge]: https://david-dm.org/OneFE/eslint-config-onefe/peer-status.svg
[peer-deps]: https://david-dm.org/OneFE/eslint-config-onefe#info=peerDependencies 

[travis-ci-image]: https://travis-ci.org/OneFE/eslint-config-onefe.svg
[travis-ci-url]: https://travis-ci.org/OneFE/eslint-config-onefe
