var fs=require('fs')
var rs=fs.createReadStream("sdlc2.txt");
var ws=fs.createWriteStream("sample1.txt");
rs.pipe(ws)
console.log("Complted..")