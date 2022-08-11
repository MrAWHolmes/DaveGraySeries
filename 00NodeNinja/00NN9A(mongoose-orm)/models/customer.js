// Our OBJECT model for the customers collection

const mongoose = require("mongoose");
const connection = require("../utils/database");

//Schema for our customer collection documents
// This is a customer object
const customer = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

// create an class Customer we will export
// Model  "Customer" as an instance of customer?
const Customer = connection.model("Customer", customer);

module.exports = Customer;
