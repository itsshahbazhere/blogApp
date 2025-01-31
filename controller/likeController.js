const Like = require('../models/likeModel')
const Post = require('../models/postModel')

exports.likePost = async(req,res)=>{

    try{
        const {post , user} = req.body;
        const like = new Like({post, user});
        const saveLike = await like.save();

        //push like into post so pass like id in array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push :{likes: saveLike._id}}, {new:true})
                            .populate('likes')
                            .exec();
        res.status(200).json({
            post:updatedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"error while liking post",
        })
    }
}


//check bcz it not work not deletd like 404 not found that means databse se found nhi kar paa rha
exports.unlikePost = async(req,res)=>{

    try{
        const {post , like} = req.body;
        
        //fetch post and like id and then delete
        const deleteLike = await Like.findOneAndDelete({post:post, _id:like}); //delete like in like
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull :{likes:deleteLike._id}}, {new:true}) //delete like in posts
        res.status(200).json({
            post:updatedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            error:"error while liking post",
        })
    }
}