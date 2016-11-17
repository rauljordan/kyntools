'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tail;

var _slice = require('./slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tail(arr) {
  return Array.prototype.slice.call(arr, 1, Infinity);
};