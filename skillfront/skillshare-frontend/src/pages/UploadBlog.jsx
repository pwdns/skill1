import React, { useState } from 'react';
import './UploadBlog.css';

const UploadBlog = ({ addBlog }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [media, setMedia] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type.startsWith('image') ? 'image' : 'video';
            const fileUrl = URL.createObjectURL(file);
            setMedia({ type: fileType, url: fileUrl });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author && content) {
            const newBlog = { title, author, content, media };
            addBlog(newBlog);
            setTitle('');
            setAuthor('');
            setContent('');
            setMedia(null);
        }
    };

    return (
        <div className="upload-blog">
            <h2 className="form-heading">Upload Your Blog</h2>
            <form className="form-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-input"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    className="form-input"
                    placeholder="Write your blog here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <input
                    type="file"
                    className="form-input"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                />
                <button className="form-button" type="submit">
                    Upload Blog
                </button>
            </form>
            {media && (
                <div className="media-preview">
                    {media.type === 'image' && <img src={media.url} alt="Preview" />}
                    {media.type === 'video' && (
                        <video controls>
                            <source src={media.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            )}
        </div>
    );
};

export default UploadBlog;
