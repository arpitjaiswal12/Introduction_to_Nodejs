const fs=require("fs");

const bioData={
    name:"Arpit Jaiswal",
    branch:"B.tech/CSE",
    section:"CS-1",
    College:"AITR",
    roll_no: 38,
    cgpa:8.68
} 

const jsonData=JSON.stringify(bioData);

console.log(jsonData + "\n")

// fs.appendFile("bioData.json",jsonData,(error)=>{
//     console.log("data added in file ")
// });

fs.readFile("bioData.json","utf-8",(error,data)=>{
    console.log("reading file");
    console.log(data);
})


