//setTimeout using file
var f1=require('fs')
f1.writeFile('sample.txt',"helloworld",function(err){
    if(err)throw err;
    console.log("File Created...")
})
setTimeout(function()
{
    f1.readFile("sample.txt",function(err,data){
        if(err)throw err;
        console.log(data.toString());
    })
},2000)