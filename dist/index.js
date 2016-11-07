'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

var _maybe = require('./maybe');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Identity: _identity2.default,
  Maybe: _maybe.Maybe,
  Some: _maybe.Some,
  None: _maybe.None
};