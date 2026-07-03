var fs=require('fs')
var readStream=fs.createReadStream('sdlc2.txt')
readStream.on('open',function(){
    console.log('FileOpened...')
})