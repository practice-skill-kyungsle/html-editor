import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertFromHTML, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'draft-js/dist/Draft.css';

const SplitModeEditorWithPreview = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlInput, setHtmlInput] = useState('<div>hello world</div>');

  // Function to handle changes in the editor
  const onChange = (newState) => {
    setEditorState(newState);
  };

  // Handle key commands like bold, italic, etc.
  const handleKeyCommand = (command, state) => {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  // Convert Draft.js content to HTML for the preview
  const getPreviewHTML = () => {
    const contentState = editorState.getCurrentContent();
    return stateToHTML(contentState);
  };

  // Handle importing HTML into Draft.js editor
  const importHTMLToEditor = () => {
    const blocksFromHTML = convertFromHTML(htmlInput);
    const newEditorState = EditorState.createWithContent(
      ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap)
    );
    setEditorState(newEditorState);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Editor on the left */}
      <div style={{ width: '50%', padding: '10px' }}>
        <h3>Edit Mode:</h3>
        <textarea
          value={htmlInput}
          onChange={(e) => setHtmlInput(e.target.value)}
          rows="5"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button onClick={importHTMLToEditor}>Load HTML into Editor</button>
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <Editor
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            placeholder="Edit content..."
          />
        </div>
      </div>

      {/* Preview on the right */}
      <div style={{ width: '50%', padding: '10px', borderLeft: '1px solid #ccc' }}>
        <h3>Preview Mode:</h3>
        <div
          style={{ border: '1px solid #ccc', padding: '10px', whiteSpace: 'pre-wrap' }}
          dangerouslySetInnerHTML={{ __html: getPreviewHTML() }}
        />
      </div>
    </div>
  );
};

export default SplitModeEditorWithPreview;