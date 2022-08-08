// Started in lesson 03 : client - server : https://youtu.be/-HPZ1leCV8k?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU

// Unlike php which sets up sub-domains and port listenning automagically
// each node app must run its own http server.

//updated by Request & Responses : https://youtu.be/-HPZ1leCV8k?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU

const PORT = 3000;
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request recieved:");
  console.log(req.url);
  console.log(req.method);

  //setup response header:
  // set header content type
  //res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");

  // Write a response
  res.write('<head><link rel="StyleSheet" href="#"></head>');
  res.write("<h1>Localhost:3000</H1>");
  res.write("<P>This page is served by nodejs.</p>");

  // End the response
  res.end();
});

server.listen(PORT, "localhost", () => {
  console.log(`HTTP listenning on port ${PORT}`);
  console.log("press ctr+c to terminate server");
});
