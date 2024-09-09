import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = () => {
  const [content, setContent] = useState('<div>hello world</div>');

  const handleChange = (value) => {
    setContent(value);
  };

  console.log(content);

  return (
    <div>
      <h3>HTML Tag Editor</h3>
      <ReactQuill value={content} onChange={handleChange} />
      <h3>Preview</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Quill;