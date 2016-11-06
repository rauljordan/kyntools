"use strict";
var Identity = (function () {
    function Identity(val) {
        this.val = val;
    }
    Identity.prototype.bind = function (f) {
        return f(this.val);
    };
    return Identity;
}());
exports.Identity = Identity;
