// file : ./model/blog.js
// mongoose schema for blog
//REF Tut9C Part 3
// https://youtu.be/bxsemcrY4gQ?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=795

const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Schema constructor

blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// PART 3B - the model
// https://youtu.be/bxsemcrY4gQ?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=969
//

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
