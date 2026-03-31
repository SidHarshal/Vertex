import React from 'react';
import { X, Plus, Undo, Redo, Eye } from 'lucide-react';

const EditorArea = ({ activeFile, content, onContentChange }) => {
  return (
    <main className="main-editor">
      <div className="editor-tabs">
        <div className="flex" style={{ height: '100%', alignItems: 'center' }}>
          <div className="tabs-container">
            <div className="tab active">
              {activeFile}
              <div className="tab-close">
                <X size={14} />
              </div>
            </div>
          </div>
          <div className="tab-add">
            <Plus size={18} />
          </div>
        </div>

        <div className="editor-actions">
          <div className="action-btn" title="Undo">
            <Undo size={16} />
          </div>
          <div className="action-btn" title="Redo">
            <Redo size={16} />
          </div>
          <div className="action-btn" title="Preview">
            <Eye size={16} />
          </div>
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
