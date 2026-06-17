var f1=require('fs')
f1.open('file.txt','r',(err,fd)=>{
    if(err)
    {
        console.error("Error")
    }
    else
    {
        console.log("File Open....")
    }
   
})