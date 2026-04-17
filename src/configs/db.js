const { default: mongoose } = require("mongoose");



const DB_URL=process.env.DB_URL;

const connectDb=async()=>{
    try{
             await mongoose.connect(DB_URL)
             console.log('db connected')
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}

module.exports={connectDb}