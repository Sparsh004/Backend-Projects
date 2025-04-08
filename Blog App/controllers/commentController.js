const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// bussiness logic
exports.createComment = async(req,res)=>{
    try{
        const {post,user,body} = req.body;

        const comment = new Comment({
            post,user,body
        });

        // save the object into the database
        const savedComment = await comment.save();

        // find the post by id and update the comment in the id
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comment:savedComment._id}},{new:true})
                            .populate('comment')
                            .exec();
        res.json({
            post:updatedPost
        });
    
    }                     

    catch(error){
        return res.status(500).json({
            error:error.message,
        })
    }
}