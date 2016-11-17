'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return (0, _arity2.default)(arguments[0].length, (0, _tail2.default)(arguments).reduce(_pipe, arguments[0]));
};

var _arity = require('./arity');

var _arity2 = _interopRequireDefault(_arity);

var _tail = require('./tail');

var _tail2 = _interopRequireDefault(_tail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

;