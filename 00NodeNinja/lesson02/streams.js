const fs = require("fs");
//
//  APP (Sink) <--- [full buffer] <--- [full buffer 2] <--- [Buffer|space] <-- Data SOURCE
//

// read streams
const readStream = fs.createReadStream("./docs/bigFile.txt", {
  encoding: "utf8",
});
// write streams
const writeStream = fs.createWriteStream("./docs/newBigFile.txt");

// Event listener for a full buffer arriving ... linked to the 'data' event
readStream.on("data", (chunk) => {
  console.log("new chunk...");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

//quicker method
// pipe
// create a new writestream for our pipe demo...
const pipeStream = fs.createWriteStream("./docs/pipedBigfile.txt");
readStream.pipe(pipeStream);
