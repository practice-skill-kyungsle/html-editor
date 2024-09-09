import React, { useState, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [value, setValue] = useState('');
  const [html, setHtml] = useState('');
  const quillRef = useRef(null); // Reference to the React Quill editor


  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('image', file); // Adjust the field name as needed for your server

      const quill = quillRef.current.getEditor();
      quill.insertText(0, `<img src="https://via.placeholder.com/150" alt="Uploaded Image" />`);
    };
  };


  const modules = useMemo(() => ({
    toolbar: {
     container: [
        ['image'], // Add image button
      ],
      handlers: {
        image: handleImageUpload
      } 
    }
  }),[]);


  const handlePlainText = () => {
    const editor = quillRef.current.getEditor(); // Access the Quill editor
    const plainText = editor.getText(); // Get plain text content
    console.log(plainText);
    setHtml(plainText);
    // You can set this plain text value in your state or use it as needed
  };

  return (
    <div>
      <ReactQuill 
        ref={quillRef} 
        value={value} 
        modules={modules}
        onChange={(e) => {
          // console.log(e);
          setValue(e);
          handlePlainText(e);
        }}
      />
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  );
}

export default Editor;