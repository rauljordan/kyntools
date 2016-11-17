'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arity;
function arity(n, f) {
  switch (n) {
    case 0:
      return function () {
        return f.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return f.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return f.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return f.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return f.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return f.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return f.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return f.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return f.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return f.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return f.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}