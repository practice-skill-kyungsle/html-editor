import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [value, setValue] = useState('');
  const [html, setHtml] = useState('');
  const quillRef = useRef(null); // Reference to the React Quill editor

  const handlePlainText = () => {
    const editor = quillRef.current.getEditor(); // Access the Quill editor
    const plainText = editor.getText(); // Get plain text content
    setHtml(plainText);
    // You can set this plain text value in your state or use it as needed
  };

  return (
    <div>
      <ReactQuill 
        ref={quillRef} 
        value={value} 
        onChange={(e) => {
          setValue(e);
          handlePlainText(e);
        }}
      />
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  );
}

export default Editor;