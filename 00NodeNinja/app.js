// following from :  Express Apps : https://youtu.be/Lr9WUkeYSA8?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// Precursor was vanilla nodejs server called server.js

// import express
const express = require("express");
const path = require("path");

//invoke an express instance as app
const app = express();
const PORT = 3000;

//listen on port 3000
// compare server.js lines 81 - 92:
app.listen(PORT);

//https://youtu.be/Lr9WUkeYSA8?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=458
// at this point we only have the root route "/" setup
// All others throw the express default 404 page

// Example http://localhost:3000/about
// Servers:

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>Error</title>
// </head>
// <body>
// <pre>Cannot GET /about</pre>
// </body>
// </html>
// General:
// HTTP Header Returned>>
// Request URL: http://localhost:3000/about
// Request Method: GET
// Status Code: 404 Not Found
// Remote Address: [::1]:3000
// Referrer Policy: strict-origin-when-cross-origin
// Response Header>>
// Connection: keep-alive
// Content-Length: 144
// Content-Security-Policy: default-src 'none'
// Content-Type: text/html; charset=utf-8
// Date: Tue, 09 Aug 2022 12:05:38 GMT
// Keep-Alive: timeout=5
// X-Content-Type-Options: nosniff
// X-Powered-By: Express

// process each route here with this
app.get("/", (req, res) => {
  // can code this in vanills js like server.js lines
  // 23-61 but express makes this easier:
  // Express infers type and status code for us

  // can hard code response with> res.send("<p>home page by express</p>");
  // BUT we can send an html file instead like this
  res.sendFile("./views/index.html", { root: __dirname }); // Note the root directive!
});

app.get("/about", (req, res) => {
  // can code this in vanills js like server.js lines
  // 23-61 but express makes this easier:
  // Express infers type and status code for us
  // res.send("<p>About by express</p>");

  // We can also setup the absolute name with path
  res.sendFile(path.join(__dirname, "./views/about.html"));
});

// Upgrade over href NAV tag!
// Edit index.html and about.html

// <!-- replace
//     <a href="/about">go to about</a>

//       Upgraded to nav
//       https://youtu.be/Lr9WUkeYSA8?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
//     -->
//    with
//     <nav>
//       <a href="/">Home page</a>
//       <a href="/about">About page</a>
//     </nav>

// https://youtu.be/Lr9WUkeYSA8?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// What about the redirects -
// ref: server.js lines 44-49
// redirect!
// case "/about.html":
//     res.statusCode = 301;
//     res.setHeader("Location", "/about");
//     res.end();
//     break;

app.get("/about.html", (req, res) => {
  res.redirect("/about");
});

// http://localhost/about.html
// !! Header for /index.html>
// #General Header>
// Request URL: http://localhost:3000/about.html
// Request Method: GET
// Status Code: 301 Moved Permanently (from disk cache)
// Remote Address: 127.0.0.1:3000
// Referrer Policy: strict-origin-when-cross-origin
// #Response header>
// Content-Length: 0
// Content-Type: text/html
// Date: Mon, 08 Aug 2022 12:34:32 GMT
// Location: /about

// !! Header for /about>
// #General Header>
// Request URL: http://localhost:3000/about
// Request Method: GET
// Status Code: 304 OK
// Remote Address: [::1]:3000
// Referrer Policy: strict-origin-when-cross-origin
// #Response header>
// Accept-Ranges: bytes
// Cache-Control: public, max-age=0
// Connection: keep-alive
// Date: Tue, 09 Aug 2022 12:28:20 GMT
// ETag: W/"225-182828e677c"
// Keep-Alive: timeout=5
// Last-Modified: Tue, 09 Aug 2022 12:22:26 GMT
// X-Powered-By: Express

// Custom 404 page
// https://youtu.be/Lr9WUkeYSA8?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// #middleware
// See deafualt case of server.js lines 57-60

// default:
//     path += "404.html";
//     res.statusCode = 404;
//     break;
//
// .use() is for middleware

//Use only fires if this GET HANDLER is reached
// If a handeler above is run this does not fire.
// This is a CATCHALL if nothing above it runs
// This CODE must therefore be BELOW the other
// handlers! Its not scoped it always fires

app.use((req, res) => {
  // We get our 404 page BUT the header is still 200!
  //  res.sendFile(path.join(__dirname, "./views/404.html"));

  // we must add the 404 response to the res object thus
  res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
});
