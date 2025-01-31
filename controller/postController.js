const Post = require('../models/postModel')

exports.createPost = async(req,res)=>{

    try{
        const {title,body} = req.body;
        const post = new Post({title,body});
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            error: "Error while creating post",
        })
    }
}

exports.getAllPost = async(req,res)=>{

    try{
        const posts = await Post.find().populate("comments").populate("likes").exec();
        res.status(200).json({
            posts,
        })
    }
    catch(err){
        return res.status(500).json({
            error: "Error while fetching posts",
        })
    }
}