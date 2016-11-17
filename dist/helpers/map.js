"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;
function map(arr, f) {
  var acc = [];
  for (var i = 0; i < arr.length; i++) {
    acc.push(f(arr[i], i, arr));
  }
  return acc;
};