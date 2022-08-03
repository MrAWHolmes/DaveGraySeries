// REF1: https://youtu.be/yQBw8skBdZU?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&t=1210

// Not grabbing all the data at once - more efficient!

const fs = require("fs");
const path = require("path");

//11A setting up a read stream...
const rs = fs.createReadStream(path.join(__dirname, "files", "lorum.txt"), {
  encoding: "utf8",
});

//11B create a writable stream...
const ws = fs.createWriteStream(path.join(__dirname, "files", "new_lorum.txt"));

//11C on data write it
rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});

//even faster!
//11d different sink
const ws2 = fs.createWriteStream(
  path.join(__dirname, "files", "new_lorum2.txt")
);
//11e
rs.pipe(ws2);
