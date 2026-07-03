let count=0;
const intervalId=setInterval(()=>{
    if(count==15)
    {
        clearInterval(intervalId);
        console.log("Interval Cleared")
    }
    else
    {
        const now=new Date();
        const hours=now.getHours();
        const minutes=now.getMinutes();
        const seconds=now.getSeconds();
        console.log(`Current Time::${hours}:${minutes}:${seconds}`)
    }
})