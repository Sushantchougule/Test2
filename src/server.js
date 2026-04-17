require('dotenv').config()




const app=require('./app');
const { connectDb } = require('./configs/db');
const PORT=process.env.PORT || 3000


const startServer=async()=>{
    try{
        await connectDb();
        app.listen(PORT,(()=>{
            console.log('app running on port:',PORT)
        }))
    }
    catch(e){
        console.log(e);
    }
}

startServer();