const mongoose = require('mongoose');

const post = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        body:{
            type:String,
            required:true,
            maxLength:100,
        },
        likes:[{
            type:mongoose.Schema.ObjectId,
            ref:"like",
        }],
        comment:[{
            type:mongoose.Schema.ObjectId,
            ref:"comment",
        }]

    }
);

module.exports = mongoose.model('Post',post);