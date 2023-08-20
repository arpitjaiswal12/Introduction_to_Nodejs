const fs = require("fs");

// ---- consisting of async modules ..///

fs.writeFile(
  "Report.txt",
  "This file contain the report of students in their respective subjects ",
  (error) => {
    console.log("successfully created");
    console.log(error);
  }
);

fs.appendFile(
  "Report.txt",
  " /n student name   class    section    subject     marks ",
  (err) => {
    console.log("successfully added details ");
    console.log(err);
  }
);

fs.readFile("Report.txt", "UTF-8", (error, data) => {
  console.log("data is successfully readed ");
  console.log(error);
  console.log(data);
});

fs.readFile("Report.txt", (error, data) => {
  console.log("data is successfully readed ");
  console.log(error);
  console.log(data.toString());
});
