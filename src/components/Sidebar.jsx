import React from 'react';
import { FileText } from 'lucide-react';

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
            <FileText size={16} />
            {note.name}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
