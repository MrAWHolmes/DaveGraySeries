const add = (a, b) => a + b;
// shorthand for anonymous function is the arrow function .. similar to python's lambda:
/*
  long version below as func_add
*/

const fadd = function (a, b) {
  return a + b;
};

const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => Math.floor(a / b);
const mod = (a, b) => a % b;

//Export as an Object - removed func_sub
module.exports = { fadd, add, sub, mul, div, mod };
