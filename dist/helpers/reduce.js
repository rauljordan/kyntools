"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;
function reduce(arr, callback, initialVal) {
  var acc = initialVal === undefined ? undefined : initialVal;
  for (var i = 0; i < arr.length; i++) {
    if (acc !== undefined) {
      acc = f.call(undefined, acc, arr[i], i, arr);
    } else {
      acc = arr[i];
    }
  }
  return acc;
};