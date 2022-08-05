// ref: https://youtu.be/670f71LTWpM

const nodeFetch = require("node-fetch");
const fs = require("fs");

//1-Async

/*

// setTime - an example of a callback
setTimeout(() => {
  console.log("Wait 1 second");
}, 1000);

//2
//nested setTimeouts - aka callback hell!
setTimeout(() => {
  console.log("outer branch");
  setTimeout(() => {
    console.log("2nd branch");
    setTimeout(() => {
      console.log("inner-branch");
    }, 1000);
  }, 1000);
}, 1000);

//3
// JS button event listenner - lol cant do this in node :)

// const btn;
// btn.addEventListener('clcik',()=>{
//     //callback handler code here...
// })



//4 error first callback:
fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error("ERROR");
    console.error(err);
  } else {
    console.error("GOT DATA");
    console.log(data);
  }
  console.log(data);
});

//5 Using promises
const promise = new Promise((resolve, reject) => {
  //success - uses resolve
  //failure - uses reject

  // simulate random failure
  //   with random() < 0.5 as success
  // if we doble and floor ot it becomes a test for 0

  const rand = Math.floor(Math.random() * 2);

  if (rand === 0) {
    resolve(); //callback for success
  } else {
    reject(); // callback for failure
  }
});

//consuming the promise:
console.log("simulating a promise consumption...");
promise
  .then(() => {
    console.log("promise succeded!");
  })
  .catch(() => {
    console.log("promise failed!");
  });

//6 readFile using promises:
// promise handler is already built
// we just need to cosume it!
console.log("reading the file with promises...");
fs.promises
  .readFile("./test.txt", { encoding: "utf-8" })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

console.log("promise reading done...");

//7 fetch on pokeapi :
// website : "https://pokeapi.co/""
// API     : "https://pokeapi.co/api/v2/pokemon/ditto"
nodeFetch("https://pokeapi.co/api/v22/pokemon/ditto")
  //.then((data) => console.log(data))
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
*/

//8 files with async await
const loadFile = async () => {
  try {
    const data = await fs.promises.readFile("./test.txt", {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

loadFile();

//9 fetch on pokeapi :
// website : "https://pokeapi.co/""
// API     : "https://pokeapi.co/api/v2/pokemon/ditto"

const poke = async () => {
  try {
    const rawData = await nodeFetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const jsonData = await rawData.json();
    console.log(jsonData);
  } catch (err) {
    console.error(err);
  }
};

console.log("poke() says...");
poke();

//10 fetch on pokeapi :
// website : "https://pokeapi.co/""
// API     : "https://pokeapi.co/api/v2/pokemon/{id}"
// add an id paramter

const pokeId = async (id) => {
  try {
    const rawData = await nodeFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const jsonData = await rawData.json();
    console.log(`pokeId(${id})`);
    console.log(jsonData);
  } catch (err) {
    console.error(err);
  }
};

console.log("pokeId(2) says...");
pokeId(4);
