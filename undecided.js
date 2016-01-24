/**
 * js-coding-standards
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2016 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  // The following rules are available, but no consensus has been reached how to classify them or what
  // the default configuration should be.
  //
  // Note: Rules should be present here only temporarily - they should be moved to their respective
  // configuration files as soon as possible.
  rules: {
    // Suggest using Reflect methods where applicable
    'prefer-reflect': 0,

    // Disallow generator functions that do not have yield
    'require-yield': 0,

    // Disallow use of the void operator
    'no-void': 0,

    // Require Radix Parameter
    // This rule is aimed at preventing the unintended conversion of a string to a number of a
    // different base than intended.
    'radix': 0,

    // Require IIFEs to be Wrapped
    'wrap-iife': 0,

    // Limit Maximum Depth
    // This rule aims to reduce the complexity of your code by allowing you to configure the maximum
    // depth blocks can be nested in a function.
    'max-depth': 0,

    // Limit Maximum Number of Parameters
    // Functions that take numerous parameters can be difficult to read and write because it requires
    // the memorization of what each parameter is, its type, and the order they should appear in.
    'max-params': 0,

    // Require Function Expressions to have a Name
    // If you provide the optional name for a function expression then you will get the name of the
    // function expression in the stack trace.
    'func-names': 0,

    // Validate Indentation
    // This rule is aimed to enforce consistent indentation style.
    'indent': 0,

    // Require or disallow spaces before/after unary operators
    // This rule enforces consistency regarding the spaces after words unary operators and after/before
    // nonwords unary operators.
    'space-unary-ops': 0,

    // Require Regex Literals to be Wrapped
    'wrap-regex': 0
  }
}