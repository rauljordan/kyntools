'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Maybe = exports.Maybe = function () {
  function Maybe(val) {
    _classCallCheck(this, Maybe);

    this.val = val;
  }

  _createClass(Maybe, [{
    key: 'flatMap',
    value: function flatMap(f) {
      return this.val ? f(this.val) : null;
    }
  }, {
    key: 'map',
    value: function map(f) {
      return this.val ? new Maybe(f(this.val)) : new Maybe(null);
    }
  }, {
    key: 'ap',
    value: function ap(f) {
      if (this.isSome()) {
        return new Maybe(f.getOrElse(function (arg) {
          return arg;
        })(this.val));
      }
      return null;
    }
  }, {
    key: 'catamorphism',
    value: function catamorphism(none, some) {
      return this.isSome() ? some(this.val) : none();
    }
  }, {
    key: 'filter',
    value: function filter(f) {
      if (!this.val) {
        return new Maybe(null);
      }
      return f(this.val) ? new Maybe(this.val) : new Maybe(null);
    }
  }, {
    key: 'isSome',
    value: function isSome() {
      return this.val ? true : false;
    }
  }, {
    key: 'isNone',
    value: function isNone() {
      return !this.val ? true : false;
    }
  }, {
    key: 'getOrElse',
    value: function getOrElse(other) {
      return this.val ? this.val : other;
    }
  }, {
    key: 'orElse',
    value: function orElse(other) {
      return this.val ? new Maybe(this.val) : other;
    }
  }], [{
    key: 'fromNull',
    value: function fromNull(val) {
      return val ? new Maybe(val) : new Maybe(null);
    }
  }]);

  return Maybe;
}();

var Some = exports.Some = function Some(val) {
  return new Maybe(val);
};

var None = exports.None = function None(val) {
  return new Maybe(null);
};