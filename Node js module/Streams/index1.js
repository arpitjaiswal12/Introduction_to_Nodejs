const fs= require("fs")
const http=require("http")

const server=http.createServer((req,res)=>{
    fs.readFile("sample.txt","utf-8",(err,data)=>{
        res.end(data);
    })

});

server.listen(3003,"127.0.0.1",()=>{
    console.log("the response is generated")
})





