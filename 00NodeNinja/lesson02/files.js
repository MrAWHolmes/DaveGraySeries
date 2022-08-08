const fs = require("fs");

// read files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// write files
fs.writeFile("./docs/blog1.txt", "Our data ...", () => {
  console.log("Data written...");
});

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("./assets folder was created.");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Folder ./assets was sucessfully deleted.");
  });
}

// deleting files
if (fs.existsSync("./docs/delMe.txt")) {
  fs.unlink("./docs/delMe.txt", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("./docs/delMe.txt sucessfully deleted.");
  });
} else {
  console.log("no ./docs/delMe.txt file to delete");
}

console.log("this is the last line of the code");
