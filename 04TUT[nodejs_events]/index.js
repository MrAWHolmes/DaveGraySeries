// created in step 3
// uses logEvents.js

const logEvents = require("./logEvents");

// now we begin using the events common core module
const EventEmitter = require("events");

//inheritted EventEmitter
class MyEmitter extends EventEmitter {}

//instantiate a new object
const myEmitter = new MyEmitter();

//add listenner for a log event
myEmitter.on("log", (msg) => {
  logEvents(msg);
});

// time here is to simulate a delay between an event
// and the definition.
// Time driven - we want to fire our own event - text

setTimeout(() => {
  //fire a 'log' event
  myEmitter.emit("log", "2 second test event");
}, 2000); //2 second delay!
