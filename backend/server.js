const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require("dotenv").config();

const app=express()
app.use(cors())
app.use(express.json())
//schema linked
const Student=require("./models/Student")

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("Monogodb connected"))
.catch((err)=>console.log("connection error",err))

app.get("/students",async(req,res)=>{
    try
    {
        const students=await Student.find();
        res.status(200).json(students);
    }
    catch(error)
    {
        res.status(500).json({
            message:error.message
        })
    }
})


//insert data
app.post("/students",async(req,res)=>{
    try
    {
        const student=new Student(req.body);
        await student.save()
        res.status(201).json({
            message:"Student Inserted",data:student
        })

    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
})

//Delete Student
app.delete("/students/:id",async(req,res)=>{
    try
    {
        const student=await Student.findByIdAndDelete(req.params.id);
        if(!student)
        {
            return res.status(404).json({message:"Student not found"})
        }
        res.status(200).json({message:"Student deleted.."})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})
//update Student
app.put("/students/:id",async(req,res)=>{
    try
    {
        const student=await Student.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
         if(!student)
         {
        return res.status(404).json({message:"Student not found"})
        }
        res.status(200).json({message:"Student updated..",data:student})
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
   
    
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log("Server is Running..")
})

