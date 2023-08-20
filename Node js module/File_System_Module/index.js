console.log("Introduction to file system");
const fs = require("fs");

//creating the file or writing in the file//

fs.writeFileSync(
  "write.txt",
  "creating the new file this method create the new file or write the data in the give file location "
);


// if file is already is created fs.writeFileSync() metheod rewrite the content in this file
console.log("write.txt is modified");
fs.writeFileSync("write.txt", "hello programmers ");

// adding the content in the file

console.log("append the content in the write.txt");

fs.appendFileSync("write.txt", "the new content is added");

//reading data frome file

const read = fs.readFileSync("write.txt"); //this method will return the buffer
console.log(read);

const data_readed = read.toString();

console.log(data_readed);

//rename the original file

fs.renameSync("write.txt", "read_write.txt");
console.log("successfully renamed ");

fs.writeFileSync("index2.js", "hello world");
