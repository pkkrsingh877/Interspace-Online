import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Post = () => {
  const { id } = useParams();  // Get the post id from the URL
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(response.data);
    } catch (err) {
      console.log(err)
    }
  };

  // Fetch the post data when the component mounts
  useEffect(() => {
    fetchPost();
  });

  return (
    <div>
      {post ? (
        <div className="post">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <p className="post-date">Date: {new Date(post.createdAt).toLocaleString()}</p>
          <Link to="/posts">All Posts</Link>
        </div>
      ) : (
        <p>No user information available</p>
      )}

      <style jsx>{`
        .post {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          margin: 16px 0;
          background-color: #f9f9f9;
        }
        .post-title {
          font-size: 1.5em;
          margin-bottom: 8px;
        }
        .post-content {
          font-size: 1em;
          margin-bottom: 8px;
        }
        .post-author,
        .post-date {
          font-size: 0.8em;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default Post;
