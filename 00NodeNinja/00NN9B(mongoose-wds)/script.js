//https://youtu.be/DZBGEVgL2eE

// begin with mongoose import and connection
// Assuming loval mongoodb again!

mongoose = require("mongoose");
const User = require("./schemas/User");

connection = mongoose.connect(
  "mongodb://localhost/wds",
  () => {
    console.log("connected to wds database");
  },
  (e) => {
    console.log(e);
    throw e;
  }
);

//Lets create a user object
const user1 = new User({
  name: "Harry",
  age: 12,
  hobbies: ["Quddich", "Potions", "DA"],
  address: {
    street: "24 Privet Drive",
    city: "Little Winning",
  },
  email: "hpottter@hogwarts.uk",
});

//method1:
//to save this need async code... method is save()
// save to our dbase with promises:
user1
  .save()
  .then((result) => {
    console.log("saved record with .save() promise");
    console.log(result);
  })
  .catch((err) => {
    console.log("user1.save().then() failes:", err.message);
    //throw err;
  });

// method2 : async await is better!
async function saveMethod2() {
  const user2 = new User({
    name: "Hermoine",
    age: 12,
    email: "hermoine@hogwarts.com",
  });
  try {
    await user2.save();
    console.log(`${user2} was saved with async method2`);
  } catch (err) {
    console.log("saveMethod2 try{} fails: ", err.message);
    //throw err;
  }
}

saveMethod2();

//method3 use the create() method
async function saveMethod3() {
  try {
    const user3 = await User.create({
      name: "Ronald",
      age: 12,
      hobbies: ["Quddich", "Defense Against the Dark Arts", "DA"],
      address: {
        street: "The Barrow",
        city: "Umberidge",
      },
      email: "rweasley@yahoo.co.uk",
    });
    // This does a save automagically
    console.log(`${user3} was saved with create()`);
  } catch (err) {
    console.log("method3(): await User.create() fails: ", err.message);
    //throw err;
  }
}

saveMethod3();

async function part7Queries() {
  try {
    const results = await User.find();
    console.log(results);
  } catch (e) {
    console.log("part7Queries() throws ", e.message);
    throw e;
  }
}

async function addAsFriendToHarry() {
  try {
    const harryObj = await User.find({ name: "Harry" });
    console.log(harryObj);
    try {
      const ronObj = await User.find({ name: "Ronald" });
      console.log(ronObj);
      try {
        // Copy Rons _id to Harrys best friend
        harryObj[0].bestFriend = ronObj[0]._id;
        await harryObj[0].save();
        console.log("Harry data updated");
      } catch (e) {
        console.log("addAsFriendToHarry():3 throws ", e.message);
        throw e;
      }
    } catch (e) {
      console.log("addAsFriendToHarry():2 throws ", e.message);
      throw e;
    }
  } catch (e) {
    console.log("addAsFriendToHarry():1 throws ", e.message);
    throw e;
  }
}

async function getHarryJoinOnFriend() {
  //This is how we do joins :)
  try {
    const user = await User.where("name")
      .equals("Harry")
      .populate("bestFriend");

    return user;
  } catch (e) {
    console.log("displayHarryWithFrined():1", e.message);
  }
}

part7Queries();

addAsFriendToHarry();

async function showHarryJoin() {
  try {
    console.log("Pseudo Join in progress...");
    const harryJoin = await getHarryJoinOnFriend();
    console.log(harryJoin);
    // await harryJoin.save();
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

showHarryJoin();
