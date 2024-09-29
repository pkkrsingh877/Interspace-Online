import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [content, setContent] = useState('');

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/posts', { content });
            console.log('Post created:', response.data);
            // Redirect or show success message
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <form onSubmit={handlePostSubmit}>
            <h2>Create Post</h2>
            <textarea
                placeholder="Write your post here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Post</button>
        </form>
    );
};

export default CreatePost;
