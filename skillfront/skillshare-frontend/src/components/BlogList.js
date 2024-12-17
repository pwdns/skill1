import React from 'react';
import BlogCard from './BlogCard';
import './BlogList.css';

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    title={blog.title}
                    author={blog.author}
                    content={blog.content}
                    media={blog.media}
                />
            ))}
        </div>
    );
};

export default BlogList;
