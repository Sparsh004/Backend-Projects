const mongoose  = require('mongoose');

// mongodb connection

const connectDB = async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`Connected to Database ${mongoose.connection.host}`)

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Database connection failed",
            process:exit(1)
        })
    }
}

module.exports = connectDB;
