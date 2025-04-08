const express = require('express');
const router = express.Router();



// import the controllers
const {createComment} = require('../controllers/commentController');
const {createPost,getAllPost} = require('../controllers/postController')
const {likePost,unlikePost} = require('../controllers/likeController');

// create mapping
router.post("/comments/create",createComment);
router.post('/posts/create',createPost);
router.get('/posts/get',getAllPost);
router.post('/posts/like',likePost);
router.post('/posts/unlike',unlikePost);

// export
module.exports = router;