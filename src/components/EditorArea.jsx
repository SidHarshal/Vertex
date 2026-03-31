import React from 'react';

const EditorArea = ({ activeFile, content, onContentChange }) => {
  return (
    <main className="main-editor">
      <div className="editor-tabs">
        <div className="tab active">
          {activeFile}
        </div>
      </div>
      <textarea 
        className="editor-content"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        spellCheck="false"
      />
    </main>
  );
};

export default EditorArea;
