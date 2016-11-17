"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = curry;
function curry(f) {
  var arity = f.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return f.apply(null, args);
    }
    return function f2() {
      var args2 = Array.prototype.slice.call(arguments, 0);
      return f1.apply(null, args.concat(args2));
    };
  };
}