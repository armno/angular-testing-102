# angular-testing-102

Learning testing in angular with Dave: https://daveceddia.com/testing-angular-part-1-karma-setup/

1. Install `karma` and friends. `$ npm install`.
2. `$ karma init` to generate karma's config file `karma.conf.js`. we use `PhantomJS` as the browser to run the tests.
3. Install `angular` and `angular-mocks`. Put their paths in `karma.conf.js`
4. `$ karma start`

## Writing the first test: Factory

1. Create the spect file `src/greeting/greeting.spec.js`
2. Inject app module and factory
  1. Create a local variable to be a reference to the factory
	2. Bring the app module in using `beforeEach(module(moduleName))`.
	3. Inject the factory in another `beforeEach`. the injected factory has `_` prefix and suffix. assign this to the variable from 2.1
3. Write the spec in `it()` blocks.