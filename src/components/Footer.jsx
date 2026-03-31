import React from 'react';
import { IconBolt } from './Icons';

const Footer = () => {
  return (
    <footer className="editor-footer">
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <IconBolt />
          Main Branch
        </div>
        <div>0 Errors</div>
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
