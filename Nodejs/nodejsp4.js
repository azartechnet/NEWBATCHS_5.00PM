var f1=require('fs')
f1.rename('sdlc1.txt','sdlc2.txt',(err)=>{
    if(err)
    {
        console.error("Error")
    }
    else
    {
        console.log("FileRenamed...")
        f1.readFile('sdlc2.txt','utf8',(err,data)=>{
            if(err)
            {
                console.log("*******")
                console.log("Error")
            }
            else
            {
                console.log("File Data is::"+data);
            }
        })
    }
})