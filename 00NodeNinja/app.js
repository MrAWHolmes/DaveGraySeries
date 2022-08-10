// Lesson 06
// following from :  Express Apps : https://youtu.be/Lr9WUkeYSA8?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// Precursor was vanilla nodejs server called server.js
// We need to install express with npm

// Lesson 07 0 views with EJS
// https://youtu.be/yXEesONd_54?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// How to inject dynamic data into our static html code
// We need to install EJS with npm

// import express
const express = require("express");
const path = require("path");
//lesson 8
const fsPromises = require("fs").promises;
const morgan = require("morgan");

//invoke an express instance as app
const app = express();
const PORT = 3000;

//Regist view engine:
app.set("view engine", "ejs");
// express and ejs default to using ./views
// We can customize it like this...
app.set("views", "appViews");
// We need to create .ejs view templates
// in the appViews folder ..
// new file -> ./appViews/index.ejs

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
// Lesson 7 - this becoomes a renderring a view:

//lesson8 ! Logs but web-server no longer responsds with get()!!
// adding the next() method fixes this!

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`new request made:`);
  console.log(`host   : ${req.hostname}`);
  console.log(`path   : ${req.path}`);
  console.log(`method : ${req.method}`);
  next();
});

app.use((req, res, next) => {
  //ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples
  let date = new Date();
  let dateStr = `${date.getFullYear()}`;
  let timeStr = "";
  // Month is zero based
  if (date.getMonth() < 9) {
    dateStr += "0";
  }
  dateStr += `${date.getMonth() + 1}`; // Month is zero based

  //No its not a typo! getDate() returns the day value!!
  if (date.getDate() < 10) {
    dateStr += "0";
  }
  dateStr += `${date.getDate()}`;

  timeStr = `${date.getUTCHours()}`;

  if (timeStr.length < 2) {
    timeStr = "0" + timeStr;
  }

  if (date.getUTCMinutes() < 10) {
    timeStr += ":0";
  } else {
    timeStr += ":";
  }
  timeStr += `${date.getUTCMinutes()}`;

  if (date.getUTCSeconds() < 10) {
    timeStr += ":0";
  } else {
    timeStr += ":";
  }
  timeStr += `${date.getUTCSeconds()}.`;

  let ms = date.getUTCMilliseconds();
  if (ms < 10) {
    timeStr += "00";
  } else if (ms < 100) {
    timeStr += "0";
  }

  timeStr += `${ms}`;

  logData = `${dateStr}\t${timeStr}\t${req.hostname}\t${req.method}\t${req.path}\n`;
  try {
    fsPromises.appendFile("./mrHlog.txt", logData, { encode: "UTF-8" });
  } catch (err) {
    console.log(`WARNING not saved.. ${logData} `);
    console.error(`Error : ${err}`);
  }
  next();
});

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  // can code this in vanills js like server.js lines
  // 23-61 but express makes this easier:
  // Express infers type and status code for us

  // can hard code response with> res.send("<p>home page by express</p>");
  // BUT we can send an html file instead like this
  // L7: Render a viw instead of
  //   res.sendFile("./views/index.html", { root: __dirname }); // Note the root directive!
  // https://youtu.be/yXEesONd_54?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU

  //https://youtu.be/yXEesONd_54?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=934
  // Some Array data to sumilate dbase call
  const blogs = [
    { title: "Yoshi finds egges", snippet: "He ate them!" },
    { title: "Mario finds stars", snippet: "He was amazed!" },
    { title: "Boswer Defeated!", snippet: "Feed him stars!" },
  ];

  const emptyBlogs = [];

  res.render("index", { title: "Home Page!", blogs: blogs }); //state the .ejs file name with no extension
  // 2nd parameter is a JSON data object
});

app.get("/about", (req, res) => {
  // can code this in vanills js like server.js lines
  // 23-61 but express makes this easier:
  // Express infers type and status code for us
  // res.send("<p>About by express</p>");

  // We can also setup the absolute name with path
  // L6 was> res.sendFile(path.join(__dirname, "./views/about.html"));
  //L7 we render a view
  res.render("about", { title: "About Page!" });
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

//L6 Was probalby will still work in L6 as its a redirect
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

//Lesson 7: https://youtu.be/yXEesONd_54?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// Adding a route for '/blogs/create'
// create FORM page with same headings
// new file create.ejs...
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new post!" });
});

app.use((req, res) => {
  // We get our 404 page BUT the header is still 200!
  //  res.sendFile(path.join(__dirname, "./views/404.html"));

  // we must add the 404 response to the res object thus
  // L6 was   res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
  res.status(404).render("404", { title: "404 Error!" });
});
