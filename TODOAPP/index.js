const express = require("express");
const app = express();

// loading config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());



//import routes for toDo list
const todoRoutes=require("./routes/todo");
//mounts (adding/ appending the ) todo API routes :: when user hits the user the bydefault path is atteached with the entered request
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT,()=>{
  console.log(`server started successfully on port no. ${PORT}`);
})

//establishing connection with database 
const dbConnect=require("./config/database")
dbConnect();

//by default path url 
app.get("/",(req,res)=>{
  res.send("<h1>Hello world from Todo app </h1>");
})
