//import models
const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

//business logic 

exports.createComment = async(req,res)=>{

    try{
        //data push into comment body
        const {post,user,body} = req.body; //fetch data from request body
        const comment = new Comment({post,user,body});
        const saveComment = await comment.save(); //data save in comment

        //comment entry in also post model comment array
        //find post by id and push comment id in comment array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments:saveComment._id}}, {new:true} )
                            .populate('comments')
                            .exec();
        res.json({
            post:updatedPost,
        })

    }
    catch(err){
        return res.status(500).json({
            error:"Error while creating comments"
        })
    }
}


exports.deleteComment = async(req,res)=>{

    try{
        const {post, comment} = req.body; //fetch data from request body
        const deleteComment = await Comment.findByIdAndDelete({post:post, _id:comment}); //deleting comment
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull: {comments:deleteComment._id}}, {new:true} );
                            
        res.status(200).json({
            post:updatedPost,
        })

    }
    catch(err){
        return res.status(500).json({
            error:"Error while deleting comments"
        })
    }
}