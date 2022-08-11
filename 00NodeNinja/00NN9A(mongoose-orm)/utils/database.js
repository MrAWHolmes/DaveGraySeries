const mongoose = require("mongoose");
const db = require("./passwords.js");

console.log(`user : ${db.user}\n pass:${db.pass}`);

const connection = mongoose.createConnection(
  `mongodb://localhost:27017/00nntut9A`
);

// with password protected databse could add this into the string thus
// to do...
//

module.exports = connection;
