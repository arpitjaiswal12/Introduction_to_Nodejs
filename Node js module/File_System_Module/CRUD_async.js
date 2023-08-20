const { error } = require("console");
const fs=require("fs");

fs.mkdir("info",(error)=>{
console.log("folder is created ")
})  //create the folder  asynronously 

fs.writeFile("./info/bio.txt","this folder will content this basic information ",(error)=>{
    console.log(error);
    console.log("file is created ");
})

fs.appendFile("./info/bio.txt","\n Name: Arpit Jaiswl \n class: CSE-1 \n college: Acropolis insititue of technology and research ",()=>{});

fs.rename("./info/bio.txt","./info/Mybio.txt",()=>{});

fs.readFile("./info/Mybio.txt","utf-8",(error,data)=>{
    console.log(data)
})

fs.unlink("./info/Mybio.txt",()=>{console.log("file is deleted")});

fs.rmdir("./info",()=>{console.log("folder deleted successfully")});

