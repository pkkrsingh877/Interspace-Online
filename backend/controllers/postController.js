const Post = require('../models/Post');

// Controller to create a new post
const createPost = async (req, res) => {
    try {
        const { title, content, id } = req.body;
        const newPost = new Post({ title, content, id });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createPost, getPosts };
