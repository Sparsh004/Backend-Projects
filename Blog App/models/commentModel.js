// import mongoose
const mongoose = require('mongoose');

// route handler
const comment = new mongoose.Schema(
    {
        post:{
            type:mongoose.Schema.ObjectId,
            ref:"Post", //refefence to the post model
        },
        user:{
            type:String,
            required:true,
        },
        body:{
            type:String,
            required:true,
        }
    }
);

// export the schema

module.exports = mongoose.model('comment',comment);