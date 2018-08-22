/**
 * Js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2018 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const globs = require('../../globs')

module.exports = {

  overrides: [{
    files: globs.test,

    plugins: [
      'mocha',
    ],

    env: {
      mocha: true,
    },

    rules: {
      // Enforces handling of callbacks for async tests
      // Mocha allows you to write asynchronous tests by adding a done callback to the parameters of
      // your test function. It is easy to forget calling this callback after the asynchronous
      // operation is done.
      // @TODO (semver-major): Raise to `error`
      'mocha/handle-done-callback': 'warn',

      // Limit the number of top-level suites in a single file
      // This rule enforces having a limited amount of top-level suites in a file.
      'mocha/max-top-level-suites': ['warn', { limit: 1 }],

      // Disallow exclusive tests
      // This rule reminds you to remove .only from your tests by raising a warning whenever you are
      // using the exclusivity feature.
      'mocha/no-exclusive-tests': 'warn',

      // Disallow global tests
      // This rule checks each mocha test function to not be located directly in the global scope.
      'mocha/no-global-tests': 'warn',

      // Disallow identical titles
      // This rule looks at the title of every test and test suites. It will report when two test
      // suites or two test cases at the same level of a test suite have the same title.
      'mocha/no-identical-title': 'warn',

      // Disallow tests to be nested within other tests
      // This rule looks for all test cases (it, specify and test) or suites (describe, context and
      // suite) which are nested within another test case.
      // @TODO (semver-major): Raise to `error`
      'mocha/no-nested-tests': 'warn',

      // Disallow returning in a test or hook function that uses a callback
      // Mocha's tests or hooks (like before) may be asynchronous by either returning a Promise or
      // specifying a callback parameter for the function. It can be confusing to have both methods
      // used in a test or hook, and from Mocha v3 on, causes the test to fail in order to force
      // developers to remove this source of confusion.
      // @TODO (semver-major): Raise to `error`
      'mocha/no-return-and-callback': 'warn',

      // Disallow setup in describe blocks
      // Any setup directly in a describe is run before all tests execute. This rule reports all
      // function calls and use of the dot operator (due to getters and setters) directly in
      // describe blocks.
      'mocha/no-setup-in-describe': 'warn',
    },
  }],
}
