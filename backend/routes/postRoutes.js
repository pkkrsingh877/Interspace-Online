const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');

const router = express.Router();

// Route for creating a new post
router.post('/posts', createPost);

// Route for getting all posts
router.get('/posts', getPosts);

module.exports = router;
