// Our OBJECT Model for our orders collection

const mongoose = require("mongoose");
const connection = require("../utils/database");

// As Customer id is a FK to order we must get the Customer Model
const Customer = require("./customer");

// Define the Schema for orders
const order = mongoose.Schema({
  total: {
    type: Number,
    required: true,
  },
  // FK: ref creates the link
  customer_id: {
    type: mongoose.Schema.ObjectId,
    ref: Customer,
    required: true,
    index: true,
  },
});

const Order = connection.model("Order", order);

module.exports = Order;

// Note in mongodb / mongoose we dont care if its 1:M etc
// We just need a ref
