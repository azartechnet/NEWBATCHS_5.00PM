const {MongoClient}=require('mongodb')
const url='mongodb+srv://admin:admin@cluster0.feuonss.mongodb.net/?appName=Cluster0';
const client=new MongoClient(url)
async function run()
{
    try
    {
        const db=client.db('dharanidb')
        const c1=db.collection('evecol');
        // const result=await c1.insertOne({name:"azar",age:22})
        //const result=await c1.insertMany([{name:"a1",age:23},{name:"a2",age:34}])
        //update
        //const result=await c1.updateOne({name:"a1"},{$set:{age:12}});
        //delete
        //const result=await c1.deleteOne({name:"a1"});
        console.log(result)
    }finally
    {
        await client.close()
    }
}run().catch(console.error)