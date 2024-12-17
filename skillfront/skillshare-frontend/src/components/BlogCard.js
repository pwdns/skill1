import React from 'react';
import './BlogList.css';

const BlogCard = ({ title, author, content, media }) => {
    return (
        <div className="blog-item">
            {media && media.type === 'image' && (
                <img src={media.url} alt={title} />
            )}
            {media && media.type === 'video' && (
                <video controls>
                    <source src={media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            <h3>{title}</h3>
            <p><strong>By:</strong> {author}</p>
            <p>{content}</p>
        </div>
    );
};

export default BlogCard;
