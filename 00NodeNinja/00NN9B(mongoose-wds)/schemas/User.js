//Note naming Cap Singular

//required to create mongoose models
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 130,
  },
  email: {
    type: String,
    minLength: 8,
    required: true,
    lowecase: true,
    unique: true,
    validate: {
      validator: (v) => {
        let atPos = v.toString().indexOf("@");
        if (atPos < 0) {
          return false;
        } else {
          return true;
        }
      },
      message: (props) => `email:[ ${props.value} ] has no @ symbol`,
    },
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  // ref to another object
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User", // this is how we do joins
  },
  bobbies: [String], // Array of String
  // can nest too
  address: addressSchema,
});

//We caninject static methods onto our schema model!
// https://youtu.be/DZBGEVgL2eE?t=1458
// Part 9

//NB! These methods use this and so you cant have a
//  labda or arrow function !

userSchema.methods.sayHi = function () {};

const User = mongoose.model("User", userSchema); // Note Simgular!
module.exports = User;
// can do this in oone line:
// module.exports = mongoose.model("User", userSchema);
