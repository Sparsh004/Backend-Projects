const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB connection successful"))
    .catch((error)=>{
        console.log("Received an Error");
        console.error(error.message);
        process.exit(1);
    })
}


module.exports = connectDB;