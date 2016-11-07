'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Identity Monad Class
 */
var Identity = function () {
  function Identity(val) {
    _classCallCheck(this, Identity);

    this.val = val;
  }

  _createClass(Identity, [{
    key: 'flatMap',
    value: function flatMap(f) {
      return f(this.val);
    }
  }, {
    key: 'map',
    value: function map(f) {
      return new Identity(f(this.val));
    }
  }, {
    key: 'get',
    value: function get() {
      return this.val;
    }
  }]);

  return Identity;
}();

exports.default = Identity;