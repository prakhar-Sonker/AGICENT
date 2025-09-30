var Userr = /** @class */ (function () {
    function Userr(name) {
        this.name = name;
    }
    Userr.prototype.changeName = function () {
        this.name = "hellochange"; //this will not work bcz we have set readonnly before the name bcz of this name will be fixed
    };
    return Userr;
}());
var u1 = new Userr("Prakhar");
