import React from 'react';
import { X, Plus, Undo, Redo, Eye, Pencil } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Settings from './Settings';

const EditorArea = ({ activeFile, content, onContentChange, isEditMode, onModeToggle }) => {
  const isSettings = activeFile === 'Settings';

  return (
    <main className="main-editor">
      <div className="editor-tabs">
        <div className="flex" style={{ height: '100%', alignItems: 'center' }}>
          <div className="tabs-container">
            <div className={`tab ${isSettings ? 'active' : ''}`}>
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
          {!isSettings && (
            <>
              <div className="action-btn" title="Undo">
                <Undo size={16} />
              </div>
              <div className="action-btn" title="Redo">
                <Redo size={16} />
              </div>
            </>
          )}
          
          {!isSettings && (
            <div className="action-btn" title={isEditMode ? "Preview Mode" : "Edit Mode"} onClick={onModeToggle}>
              {isEditMode ? (
                <Eye size={16} />
              ) : (
                <Pencil size={16} className="text-secondary" />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="editor-view-container" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {isSettings ? (
          <Settings />
        ) : isEditMode ? (
          <textarea 
            className="editor-content"
            style={{ width: '100%', height: '100%', flex: 1 }}
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            spellCheck="false"
          />
        ) : (
          <div className="preview-content animate-fade-in">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content || "No content to preview."}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </main>
  );
};

export default EditorArea;
