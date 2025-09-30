var Userrs = /** @class */ (function () {
    function Userrs(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Userrs.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Userrs.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Userrs;
}());
var p1 = new Userrs("Prakhar", 23);
