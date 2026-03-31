import React from 'react';
import { FileText, Search } from 'lucide-react';

const Sidebar = ({ notes, activeFile, onSelectFile, activeView, searchQuery, onSearchQueryChange }) => {
  if (activeView === 'search') {
    return (
      <aside className="sidebar">
        <div className="sidebar-title">Search</div>
        <div className="search-container mb-10" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.8rem' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={14} style={{ position: 'absolute', left: '8px', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search Notes..." 
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              style={{ 
                width: '100%', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--glass-border)', 
                borderRadius: '4px',
                padding: '6px 10px 6px 30px',
                color: 'var(--text-main)',
                fontSize: '0.8rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
        <div className="explorer-list">
          {notes
            .filter(n => n.name.toLowerCase().includes(searchQuery.toLowerCase()) || n.content.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(note => (
            <div 
              key={note.name} 
              className={`explorer-item ${activeFile === note.name ? 'active' : ''}`}
              onClick={() => onSelectFile(note.name)}
            >
              <FileText size={16} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>{note.name}</span>
                {searchQuery && (
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    Match in content...
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </aside>
    );
  }

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
