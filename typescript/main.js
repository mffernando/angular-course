//compile .ts [tsc main.ts] | install typescript [npm install -g typescript]
var myVariable = "my variable";
function myFunction(x, y) {
    return x + y;
}
//ES 6 or ES 2015
//es6-features.org
var num = 2;
var pi = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (value) {
    return value * 2;
});
//using es6:
numbers.map(function (value) { return value * 2; });
var Mathematics = /** @class */ (function () {
    function Mathematics() {
    }
    Mathematics.prototype.sum = function (x, y) {
        return x + y;
    };
    return Mathematics;
}());
