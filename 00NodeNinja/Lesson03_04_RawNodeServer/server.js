// Started in lesson 03 : client - server : https://youtu.be/-HPZ1leCV8k?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU

// Unlike php which sets up sub-domains and port listenning automagically
// each node app must run its own http server.

//updated by Request & Responses : https://youtu.be/-HPZ1leCV8k?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU

const PORT = 3000;
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request recieved:");
  console.log(req.url);
  console.log(req.method);

  //setup response header:
  // set header content type
  //res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");

  // We need to get the route / path from the request.
  let path = "./views/";

  // our router:
  console.log(req.url);
  switch (req.url) {
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    // redirect!
    case "/about.html":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
      cd;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // Read an html file
  //fs.readFile("./views/index.html", (err, data) => {
  console.log(`Sending ${path}`);
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // send the HTML file data
      res.write(data);
      // End the response

      // if writing only one thing can use
      // res.end(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", () => {
  console.log(`HTTP listenning on port ${PORT}`);
  console.log("press ctr+c to terminate server");
});
