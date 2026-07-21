const e1=require('express')
const app=e1()
app.get("/",(req,res)=>{
    res.send("Hello world")
}).listen(3000,()=>{
    console.log("Server is Running..")
})
