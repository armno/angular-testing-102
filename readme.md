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

## Jasmine syntax

https://daveceddia.com/testing-angular-part-2-jasmine-syntax/

- `describe` creates a group of tests. It is usually used to create a scenario/use case.
- `beforeEach` runs before each test in its block.
- `it` - a block of test
- `expect` - assertion inside of `it` block. Should have 1 assertion in 1 test but in some cases it is OK to have more (manipulating data and then verify it).
- Matchers `toEqual` and friends.

- `module` loads an angular module. used in `beforeEach()`
- `inject` takes a function that will get injected by angular's DI. used to assign injected modules to local variables to be used with the tests.

## Part 3: Testing in Angular World

https://daveceddia.com/testing-angular-part-3-testing-recipes/

- test pattern
  1. import the module/service
  2. inject the service (the one to test) in `beforeEach`. put it in a local variable to use with other tests.
  3. write the tests
- try to keep one assertion per test to keep the method small. a method should do just one thing.