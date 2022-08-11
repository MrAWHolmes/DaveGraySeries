// This is the Driver or Application :)

// We pull in the models:

const { connection } = require("mongoose");
const { collection } = require("./models/customer");
const Customer = require("./models/customer");
const Order = require("./models/order");

// We need the CustomerId when we create an order!
// start at null as it will be set by mongodb

let customerId = null;

//Insert an array of Customers
//NB! This is Async = Promise so we need then
// Can use Customer.create() to insert One document

//can use Customer.create() to create one document

// Step 4 can we drop the documents in the collection?

// Step 5A - refactor with a named callback?

const tutorialCode = async () => {
  Customer.insertMany([
    { name: "Joey T", email: "jt@gmail.com" },
    { name: "Chandler Bing", email: "cb@gmail.com" },
  ])
    .then((data) => {
      console.log(`Data inserted to Customer ${data}`);
      //3:
      console.log(`We will now delete one of these...`);
      return Customer.deleteOne({ name: "Joey T" }); // => returns a promise
    })
    //3 promise from return Customer.deleteOne()
    .then((deletedCustomer) => {
      console.log(`Customer deleted is :\n`);
      console.log(deletedCustomer);
      // We are done so terminate the connection?
      //4 find all customers
      // like select * from Customers
      return Customer.find();
    })
    // handle select query callback
    .then((allCustomers) => {
      console.log("remaining customers:/n");
      console.log(allCustomers);
      //part 5B - get the Custmer Id
      customerId = allCustomers[0]._id;
      return Order.create({ total: 99.99, customer_id: customerId });
    })
    .then((order) => {
      console.log("order inserted \n");
      console.log(order);
      // part 6: https://youtu.be/b6vjbOk48_8?t=1595

      return Order.find({ customer_id: customerId });
    })
    .then((allOrders) => {
      console.log(allOrders);
    })
    // handle errors!
    .catch((err) => {
      throw err;
    });
}; // close calback of deleteMany().then(

Customer.deleteMany()
  .then(tutorialCode()) // closing ) of deleteMany.then(
  .catch((e) => {
    throw e;
  });

//save changes to run
// save
