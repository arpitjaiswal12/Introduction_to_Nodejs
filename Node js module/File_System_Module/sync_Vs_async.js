const fs = require("fs");
//synchronous
console.log("Start")

const data =fs.readFileSync("read_write.txt","utf-8");

console.log(data);

console.log("hii we are starting the node js course for your development purpose and let gooo")

const data2=fs.readFileSync("Report.txt")

console.log(data2.toString());

console.log("end this comment ")

// asynchronous way

console.log("Start the executuion\n ");

fs.readFile("read_write.txt", "utf-8", (error, data) => {
  console.log("Error detected in first file ", error);
  console.log(data);
});

console.log("reading another file \n");

fs.readFile("Report.txt", "utf-8", (error, data2) => {
  console.log("Error detected in second file ", error);
  console.log(data2);
});

console.log("All file are readed successfully \n");
