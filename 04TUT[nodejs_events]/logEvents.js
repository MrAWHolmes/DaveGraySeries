//;ref: https://youtu.be/2vaTy4dkbJM
// TUT04 - node common events module

// modules imported from TUT03

const { format } = require("date-fns"); // date formatting
const { v4: uuid } = require("uuid"); // allow use of v4 as uuid

//1 - no npm as common core modules
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

//2
const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);

  try {
    //4 Handle folder creation if dne
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
// call logEvents() changed

//logEvents();

// quick log :)
//console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
//console.log(uuid());
