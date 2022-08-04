//ref1:https://youtu.be/oGO_-DWTmKA

// This is a simple file used in the demonstration
// of NPM basics by Dave Gray

console.log("03TUT - testing...");
console.log("Checking nodemon!");

const { format } = require("date-fns");

//9
//ref: https://www.npmjs.com/package/uuid
const { v4: uuid } = require("uuid");
// means import v4 as uuid from uuid
// use as uuid()

// note format string: "yyyyMMdd\tHH:mm:ss" is tab delimitted :)

// console.log("Testing (7) dev nodemon");

//9 - we ant a log...
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
console.log(uuid());

console.log();
