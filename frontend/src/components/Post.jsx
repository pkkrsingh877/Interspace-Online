import React from 'react';

const Post = ({ title, content, author, date }) => {
    return (
        <div className="post">
            <h2 className="post-title">{title}</h2>
            <p className="post-content">{content}</p>
            {author && <p className="post-author">By: {author}</p>}
            {date && <p className="post-date">Date: {date}</p>}
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
