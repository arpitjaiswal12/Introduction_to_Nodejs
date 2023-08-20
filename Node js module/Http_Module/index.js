const http = require("http");
const fs = require("fs");
const { error } = require("console");

let localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  console.log("the request has made");
  const log = `${Date.now()} : ${req.url} the new request has been made \n `;
  
  fs.appendFile("log.txt", log, (error) => {
    // res.end("the response from server side");
    switch (req.url) {
      case "/Home":
        res.end("you are on home page ");
        break;
      case "/about-us":
        res.end(
          "Hii i am arpit jaiswal an full stack web developer \n Now currently pusuing engineering from AITR in CSE branch"
        );
        break;
      case "/contact-us":
        res.end("You can contact me on linkedLn , facebook, whatappp");
        break;
      default:
        res.end("404 page not found");
    }
  });
});

myServer.listen(8080, localHost, () => {
  console.log("the request has been made");
});
