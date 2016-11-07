'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.None = exports.Some = exports.Maybe = exports.Identity = undefined;

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

var _maybe = require('./maybe');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Identity = _identity2.default;
exports.Maybe = _maybe.Maybe;
exports.Some = _maybe.Some;
exports.None = _maybe.None;