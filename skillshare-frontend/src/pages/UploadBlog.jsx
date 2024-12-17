import React, { useState } from 'react';
import './UploadBlog.css';

function UploadBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log('Uploading post:', { title, content, file });
    setTitle('');
    setContent('');
    setFile(null);
  };

  return (
    <form onSubmit={handleUpload}>
      <h2>Upload Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      
      {/* File upload button without "Attach a file" text */}
      <label className="file-upload-label">
        <input type="file" onChange={handleFileChange} />
        {file ? file.name : "Choose A File"}
      </label>
      
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadBlog;
