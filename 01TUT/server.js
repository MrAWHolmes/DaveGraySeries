//1
console.log("Hello World");

//3
// console.log(global); coomented out on step 5

//4-5:
const os = require("os");
const path = require("path");
const math = require("./math"); // importing our custom module math is an OBEJCT!

//destructuring the object import
const { fadd, add, sub } = require("./math"); // importing our custom module math as functions - removed from the obeject math

console.log("Using os:");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log("Using double dunder vars from os:");
console.log(__dirname);
console.log(__filename);

console.log("Using path. on __filename:");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log("Using path.parse !!");
console.log(path.parse(__filename));

console.log("Using ./math.js with an object export");
var a = 10,
  b = 3;
//NB! Use of backtick string!
console.log(`add(${a},${b})`);
console.log(math.add(a, b));

//console.log(`func_add(${a},${b})`);
//console.log(math.func_add(a, b));

console.log(`sub(${a},${b})`);
console.log(math.sub(a, b));

console.log(`div(${a},${b})`);
console.log(math.div(a, b));

console.log(`mod(${a},${b})`);
console.log(math.mod(a, b));

console.log("Using ./math.js with add and sub destructured:");
var c = 101,
  d = 99;
//NB! Use of backtick string!
console.log(`add(${c},${d})`);
console.log(add(c, d));

console.log(`sub(${c},${d})`);
console.log(sub(c, d));

console.log("Using func_add from ./math.js with individual module.exports:");
var p = 1111,
  q = 1001;

console.log(`func_add(${p},${q})`);
console.log(fadd);
//console.log("math.func_add call:");
//console.log(math.func_add(p, q));
//console.log("func_add call:");
//console.log(func_add(p, q));
