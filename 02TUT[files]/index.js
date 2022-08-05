//ref1:https://youtu.be/yQBw8skBdZU?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw

// This is the altered index0.js file
// indesx0.js illustrates how to use fs module's async readFile and writeFile and appendFile
//   callback hell is  illustrated on step 7
// Major change to methodology so saved this as index0.js
// and refactored that to THIS file index.js which uses fsPromises to avoid callback hell!

//8 changed from "const fs = require("fs");
const fsPromises = require("fs").promises;

const path = require("path");

// 8 new file operation as an async function
// replaces fs.readFile ...

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log("starter.txt read..\n");
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt")); // remove original start file to demo delete!
    console.log("file starter.txt has been deleted..");

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promises.txt"),
      data
    );
    console.log("promises.txt written..");
    console.log("appending to promises.txt written..");

    var appLines = ["line 2", "line 3", "line 4"];

    for (let x = 0; x < appLines.length; x++) {
      await fsPromises.appendFile(
        path.join(__dirname, "files", "promises.txt"),
        `\n${appLines[x]}`
      );
      console.log(`appending line ${appLines[x]}`);
    }

    await fsPromises.rename(
      path.join(__dirname, "files", "promises.txt"),
      path.join(__dirname, "files", "renamed.txt")
    );
    console.log("promises.txt --> renaimed.txt");
  } catch (err) {
    console.error(`fileOps threw error ${err}`);
  }
};

// call the function!
fileOps();

// //3 Demo call is asyncronous
// console.log("step 3 evidence of asynchronouse nature of fs.readfile");

// //5 : writing to a file...
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "My first write to this file too...",
//   (err) => {
//     if (err) throw err;
//     console.log("write operation complete..");
//   }
// );

// //6 using append file to add new data to it...
// fs.appendFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "New line 2",
//   (err) => {
//     if (err) throw err;
//     console.log("append operation complete..");
//   }
// );

// // 7 To ensure syncronous appending after create nest append file calls in the writeFile block:

// var fn = "appending.txt";
// fs.writeFile(
//   path.join(__dirname, "files", fn),
//   "file created with write...",
//   (err) => {
//     if (err) throw err;
//     console.log("write operation complete..\n");

//     var lines = ["one", "two", "three"];

//     for (let x = 0; x < lines.length; x++) {
//       fs.appendFile(
//         path.join(__dirname, "files", fn),
//         lines[x] + "\n",
//         (err) => {
//           if (err) throw err;
//         }
//       );
//       console.log(`${lines[x]} was appended...`);
//     }
//   }
// );

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

//8
