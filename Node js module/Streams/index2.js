const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    const rstream = fs.createReadStream("sample.txt");
    rstream.on("data", (chunkdata) => {
      res.write(chunkdata);
    });
    rstream.on("end", () => {
      res.end();
    });
  })
  .listen(8080, "127.0.0.1", () => {
    console.log("the response has generated");
  });
