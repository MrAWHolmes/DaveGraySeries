// const name = "Yoshi";

// console.log(name);

const greet = (name) => {
  console.log(`hello ${name}`);
};

greet("Mario");
greet("Yoshi");

//2 The global object method - setTimeout()
// Browser - dev tools
// Ctr+Shift+I : Dev tools
// global object in Browser === Window

// Analogus global in node is global
// can omit global. and just call setTimeout()
global.setTimeout(() => {
  // alert("Hi")  ;
  console.log("In the ");
}, 3000);

// lets log the global object ot the console:
// console.log(global);

//2a Its much smaller than window:

// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 69.14869999885559,
//       nodeStart: 0.7069000005722046,
//       v8Start: 3.958899974822998,
//       bootstrapComplete: 37.37940001487732,
//       environment: 18.015400052070618,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1659946990930.624
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }

//3 The global object method - setInterval()

const stopper = setTimeout(() => {
  console.log("Halting starter... ");
  clearInterval(starter);
}, 3000);

const starter = setInterval(() => {
  console.log("In the interval");
}, 1000);

//4 file globals we can use :
console.log(__dirname);
console.log(__filename);

//5 BUT we cant use DOM objects:
try {
  console.log(document.querySelector);
} catch (err) {
  console.error(err);
}
