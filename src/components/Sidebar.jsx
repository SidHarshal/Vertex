import React from 'react';
import { IconFile } from './Icons';

const Sidebar = ({ notes, activeFile, onSelectFile }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Explorer</div>
      <div className="explorer-list">
        {notes.map(note => (
          <div 
            key={note.name} 
            className={`explorer-item ${activeFile === note.name ? 'active' : ''}`}
            onClick={() => onSelectFile(note.name)}
          >
            <IconFile />
            {note.name}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
