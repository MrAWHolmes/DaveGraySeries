//ref1:https://youtu.be/yQBw8skBdZU?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw

// This is the original index.js file
// illustrates how to use fs module's async readFile and writeFile and appendFile
//   callback hell is  illustrated on step 7
// Major change to methodology so saved this as index0.js
// and refactored THIS to index.js which uses fsPromises eo avoid callback hell!

//1 see notes 1
const fs = require("fs");
//4
const path = require("path");

//2 test error handler by tryiing to read a non-existing file
//3 restore to use starter.txt
//4 Moved files into files folder and using path()
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }
);

//3 Demo call is asyncronous
console.log("step 3 evidence of asynchronouse nature of fs.readfile");

//5 : writing to a file...
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "My first write to this file too...",
  (err) => {
    if (err) throw err;
    console.log("write operation complete..");
  }
);

//6 using append file to add new data to it...
fs.appendFile(
  path.join(__dirname, "files", "reply.txt"),
  "New line 2",
  (err) => {
    if (err) throw err;
    console.log("append operation complete..");
  }
);

// 7 To ensure syncronous appending after create nest append file calls in the writeFile block:

var fn = "appending.txt";
fs.writeFile(
  path.join(__dirname, "files", fn),
  "file created with write...",
  (err) => {
    if (err) throw err;
    console.log("write operation complete..\n");

    var lines = ["one", "two", "three"];

    for (let x = 0; x < lines.length; x++) {
      fs.appendFile(
        path.join(__dirname, "files", fn),
        lines[x] + "\n",
        (err) => {
          if (err) throw err;
        }
      );
      console.log(`${lines[x]} was appended...`);
    }
  }
);

// 2 add exception handler
// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log("Uncaugh exception error: ", err);
  process.exit(1);
});

/* It works but this is 

+-----------------------------+
| BUT THIS IS "CALLBACK HELL!" |
+-----------------------------+

Major CHANGE! to imports!!!

use fsPromises!!!

EDIT> Lets rename this a index0.js and save and make NEW changes to index.js

*/
