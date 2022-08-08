const peopleObj = require("./people.js");

console.log("Return the exported JSON object peopleObj :");
console.log(peopleObj);
console.log("\nReturn the exported JSON properties with . notation :");
console.log(`peopleObj.people : ${peopleObj.people}`);
console.log(`peopleObj.ages   : ${peopleObj.ages}`);

//destructured importing
console.log("\nImport destructed JSON properties with destructures imports :");
const { people, ages } = require("./people.js");
console.log(`people : ${people}`);
console.log(`ages   : ${people}`);

//requiring core modules:
// os
const os = require("os");
//console.log(os);
console.log("\nusing os to get 'platform' & 'homedir'");
console.log(os.platform(), os.homedir());

//the fs core module
//new file FileSystem.js
