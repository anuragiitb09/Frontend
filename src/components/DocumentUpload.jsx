import React, { useState } from 'react';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    if (file) {
      formData.append('document_file', file);
    }
    if (link) {
      formData.append('external_link', link);
    }

    try {
      const response = await fetch('/api/documents/', {
        method: 'POST',
        body: formData,
        headers: {
          // Include authentication headers, such as a bearer token
        },
      });

      if (!response.ok) throw new Error('Upload failed');
      alert('Document uploaded successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Document title" required />
      <input type="file" onChange={handleFileChange} />
      <input type="text" value={link} onChange={handleLinkChange} placeholder="External link" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default DocumentUpload;
