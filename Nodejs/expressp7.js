const express=require('express')
const axios=require('axios')
const app=express()
const PORT=3000

//Middleware
app.use(express.json())

//get user details
app.get("/users",async(req,res)=>{
    try
    {
        const response=await axios.get("https://jsonplaceholder.typicode.com/users")
        res.json(response.data)
    }
    catch(error)
    {
        res.status(500).json({message:"User not found"})
    }
})
//get user details id
app.get("/users/:id",async(req,res)=>{
    try
    {
        const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
        res.json(response.data)
    }
    catch(error)
    {
        res.status(500).json({message:"User not found"})
    }
}).listen(PORT)
console.log("Server is Running..")