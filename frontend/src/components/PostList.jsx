import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts ? (
                    posts.map((post) => (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                            <p>Created at {new Date(post.createdAt).toLocaleString()}</p>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>No Posts Available to view!</p>
                )}
            </ul>
        </div>
    );
};

export default PostList;
