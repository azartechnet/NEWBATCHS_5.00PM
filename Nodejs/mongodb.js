const {MongoClient}=require('mongodb')
const url='mongodb+srv://admin:admin@cluster0.feuonss.mongodb.net/?appName=Cluster0';
const client=new MongoClient(url)
async function run()
{
    try
    {
        const db=client.db('dharanidb')
        const c1=db.collection('evecol');
        const result=await c1.insertOne({name:"azar",age:22})
        console.log(result)
    }finally
    {
        await client.close()
    }
}run().catch(console.error)