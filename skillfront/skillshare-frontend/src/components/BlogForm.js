import React, { useState } from "react";
import "./BlogForm.css";

function BlogForm({ onAddBlog }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [media, setMedia] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type.startsWith("image") ? "image" : "video";
            const fileUrl = URL.createObjectURL(file);
            setMedia({ type: fileType, url: fileUrl });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author && content) {
            onAddBlog({ title, author, content, media });
            setTitle("");
            setAuthor("");
            setContent("");
            setMedia(null);
        }
    };

    return (
        <form className="blog-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <textarea
                placeholder="Write your blog here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
            <button type="submit">Post</button>
        </form>
    );
}

export default BlogForm;
