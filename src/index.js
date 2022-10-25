"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _football_golokSzama;
class football {
    constructor(winner, golokszama, date) {
        _football_golokSzama.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _football_golokSzama, golokszama, "f");
        this.date = date;
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Football match: 6-3";
    }
}
_football_golokSzama = new WeakMap();
