import React from 'react';
import { Zap, TriangleAlert } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="editor-footer">
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <Zap size={14} />
          Main Branch
        </div>
        <div className="flex items-center gap-1">
          <TriangleAlert size={14} />
           0 Errors
        </div>
      </div>
      <div className="flex gap-4">
        <div>UTF-8</div>
        <div>Spaces: 2</div>
        <div>React (Vertex)</div>
      </div>
    </footer>
  );
};

export default Footer;
