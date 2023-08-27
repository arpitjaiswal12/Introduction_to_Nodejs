const Todo = require("../models/Todo");//importing the schema module

//define route handler
exports.createTodo = async (req, res) => {
    try{
        //extract title and description from request body
        const {title, description} = req.body; //this is destructuring way to reteriving object from response body 
        const response = await Todo.create({ // this method will insert into database
            title: title,
            description: description,
        })

        //send a json response with success tag as true
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully"
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message,
        })
    }
}