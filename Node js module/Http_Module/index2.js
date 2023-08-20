const { error } = require("console");
const fs = require("fs");
const http = require("http");
const localHost = "127.0.0.1";

http
  .createServer((req, res) => {
    console.log("the server is created ");
    if (req.url == "/") {
      res.end("hii i am a server");
    } else if (req.url == "/home") {
      res.end("this is home page ");
    } else if (req.url == "/about") {
      // fs.readFile("./File System Module/Report.txt","utf-8",(error,data)=>{
      //     console.log("read method from about us page ")
      //     res.end("Showing the json data \n"+data)
      // })  ORRR
      fs.readFile("bioData.json", "utf-8", (error, data) => {
        console.log("read method from about us page ");
        res.end("Showing the json data \n" + data);
      });
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("404 Page not found");
      res.end();
    }
  })
  .listen(80, () => {
    console.log("request has made"); 
  });
