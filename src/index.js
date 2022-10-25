"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _football_aCsapatGol, _football_bCsapatGol, _Calvinball_winner;
class football {
    constructor(aCsapat, aCsapatGol, bCsapat, bCsapatGol, date) {
        _football_aCsapatGol.set(this, void 0);
        _football_bCsapatGol.set(this, void 0);
        __classPrivateFieldSet(this, _football_aCsapatGol, aCsapatGol, "f");
        this.aCsapat = aCsapat;
        this.bCsapat = bCsapat;
        __classPrivateFieldSet(this, _football_bCsapatGol, bCsapatGol, "f");
        this.date = date;
        if (aCsapatGol > bCsapatGol) {
            this.winner = aCsapat;
        }
        else {
            this.winner = bCsapat;
        }
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Football match: " + __classPrivateFieldGet(this, _football_aCsapatGol, "f") + "-" + __classPrivateFieldGet(this, _football_bCsapatGol, "f");
    }
}
_football_aCsapatGol = new WeakMap(), _football_bCsapatGol = new WeakMap();
class marathon {
    constructor(winner, date, futottIdo) {
        this.winner = winner;
        this.date = date;
        this.futottIdo = futottIdo;
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Marathon: " + Math.floor(this.futottIdo / 60) + " min " + this.futottIdo % 60 + " s ";
    }
}
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, void 0);
        __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        this.date = date;
        this.veletlenEgeszSzam = Math.floor(Math.random() * 90) + 11;
    }
    get winner() {
        return __classPrivateFieldGet(this, _Calvinball_winner, "f");
    }
    set winner(winner) {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        }
        else {
            __classPrivateFieldSet(this, _Calvinball_winner, "Error", "f");
        }
    }
    result() {
        console.log(this.toString());
    }
    toString() {
        return "Calvinball: " + this.veletlenEgeszSzam + " points";
    }
}
_Calvinball_winner = new WeakMap();
let eredmenyek = [
    new football('xxxx', 5, 'yyyyy', 3, new Date("2022-05-05")),
    new football('zzzz', 3, 'ttttt', 7, new Date("2022-05-06")),
    new marathon('Pepsi béla', new Date("2022-04-01"), 118),
    new marathon('CocaCola béla', new Date("2022-04-03"), 130),
    new Calvinball('hhhhh', new Date("2022-06-06")),
    new Calvinball('Calvin', new Date("2022-07-10")),
];
for (let eredmeny of eredmenyek) {
    eredmeny.result();
}
