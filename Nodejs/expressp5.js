const exp=require('express')
const app=exp()
const PORT=3000;
app.get("/",(req,res)=>{
    res.send(`<div><h1>Welcome to Express Js</h1></div>`)
}).listen(PORT)
console.log("Server is Running..")
