import React from 'react';
import { Zap, TriangleAlert, Info } from 'lucide-react';

const Footer = ({ content, isEditMode }) => {
  const lineCount = content.split('\n').length;
  const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <footer className="editor-footer">
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-secondary" />
          Main Branch
        </div>
        <div className="flex items-center gap-1">
          <TriangleAlert size={14} />
           0 Errors
        </div>
        <span className="text-muted">|</span>
        <div className="flex items-center gap-1">
          {isEditMode ? (
            <span className="badge-inline" style={{ background: 'rgba(6, 182, 212, 0.2)', color: 'var(--secondary)', padding: '0 0.5rem', borderRadius: '4px' }}>EDIT MODE</span>
          ) : (
            <span className="badge-inline" style={{ background: 'rgba(147, 51, 234, 0.2)', color: 'var(--primary-light)', padding: '0 0.5rem', borderRadius: '4px' }}>PREVIEW MODE</span>
          )}
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex gap-4">
           <div><span className="text-muted">Ln:</span> {lineCount}</div>
           <div><span className="text-muted">Wd:</span> {wordCount}</div>
        </div>
        <div>UTF-8</div>
        <div>Spaces: 2</div>
        <div className="flex items-center gap-2">
           <Info size={12} />
           React (Vertex)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
