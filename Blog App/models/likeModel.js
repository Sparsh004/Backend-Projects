const mongoose = require('mongoose');

const like = new mongoose.Schema(
    {
        
        post:{
            type:mongoose.Schema.ObjectId,
            ref:"Post",
        },
        user:{
            type:String,
            required:true,
        }

    }
);

module.exports = mongoose.model('like',like);