"use strict";
//we can make multiple fxn and export them to another file using export key word
Object.defineProperty(exports, "__esModule", { value: true });
exports.addd = addd;
exports.multiplyy = multiplyy;
function addd(a, b) {
    console.log(a + b);
    return a + b;
}
function multiplyy(a, b) {
    console.log(a * b);
    return a * b;
}
