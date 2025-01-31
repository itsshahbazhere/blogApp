const express = require('express');
const router = express.Router();

//import controller

const {createPost,getAllPost} = require('../controller/postController');
const {likePost,unlikePost} = require('../controller/likeController');
const {createComment, deleteComment} = require('../controller/commentController');

//define API routes

router.post('/posts/create', createPost); //creating posts
router.get('/posts', getAllPost); //retreving post

router.post('/likes/like', likePost); //like posts
router.post('/likes/unlike', unlikePost); //unlike post

router.post('/comments/create', createComment); //creating posts
router.post('/comments/delete', deleteComment) //deleting comments

module.exports = router;