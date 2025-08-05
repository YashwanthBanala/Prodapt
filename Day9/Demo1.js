var Demo1 = /** @class */ (function () {
    function Demo1() {
        console.log("Hi Demo");
    }
    Demo1.prototype.display = function () {
        console.log("Hi Display");
    };
    return Demo1;
}());
var d = new Demo1();
d.display();
