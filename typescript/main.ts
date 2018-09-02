//compile .ts [tsc main.ts] | install typescript [npm install -g typescript]
var myVariable = "my variable";

function myFunction(x, y) {
  return x + y;
}

//ES 6 or ES 2015
//es6-features.org
let num = 2;
const pi = 3.14;
var numbers = [1, 2, 3];

numbers.map(function(value) {
  return value * 2;
});

//using es6:
numbers.map(value => value * 2);

class Mathematics {
  sum(x, y) {
    return x + y;
  }
}

//typing variables
var n1: string = "some string";
//n1 = 4;
