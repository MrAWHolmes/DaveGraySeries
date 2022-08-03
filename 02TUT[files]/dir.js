//ref: https://youtu.be/yQBw8skBdZU?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&t=1443

// working with directories now ..

const fs = require("fs");

if (!fs.existsSync("./newFolder")) {
  fs.mkdir("./newFolder", (err) => {
    if (err) throw err;
    console.log("./newFolder was created");
  });
} else {
  console.log("./newFolder already exists.");
}

if (fs.existsSync("./newFolder")) {
  fs.rmdir("./newFolder", (err) => {
    if (err) throw err;
    console.log("./newFolder was deleted");
  });
} else {
  console.log("./newFolder does not exists.");
}

//  add exception handler
// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log("Uncaugh exception error: ", err);
  process.exit(1);
});
