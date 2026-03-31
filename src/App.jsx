import React, { useState, useEffect } from 'react';
import './index.css';

// SVG Icons (Simplified for the demo)
const IconExplorer = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="activity-icon active">
    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="activity-icon">
    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
  </svg>
);

const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="activity-icon">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

function App() {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [activeFile, setActiveFile] = useState('welcome.md');
  const [content, setContent] = useState('# Welcome to Vertex\n\nThis is your space to innovate. Start writing your notes here...');
  const [notes, setNotes] = useState([
    { name: 'welcome.md', content: '# Welcome to Vertex\n\nThis is your space to innovate. Start writing your notes here...' },
    { name: 'phase1_plan.md', content: '# Phase 1 Plan\n- Initialize UI Structure\n- Onboarding flow\n- VS Code Layout' },
    { name: 'architecture.txt', content: 'Vertex Core Architecture\n- React Frontend\n- Vite Build System\n- Glassmorphism Design' }
  ]);

  const selectFile = (fileName) => {
    const note = notes.find(n => n.name === fileName);
    setActiveFile(fileName);
    setContent(note.content);
  };

  if (!isOnboarded) {
    return (
      <div className="onboarding-screen">
        <div className="mesh-bg"></div>
        <div className="glass p-20 text-center animate-fade-in" style={{ maxWidth: '600px' }}>
          <span className="badge text-xs font-semibold text-primary-light">V1.0.0 INITIALIZATION</span>
          <h1 className="text-6xl mb-6 gradient-text">VERTEX</h1>
          <p className="text-xl text-muted mb-10">
            A specialized computing environment for note-taking, orchestration, and agentic workflows.
          </p>
          <button className="btn-primary" onClick={() => setIsOnboarded(true)}>
            Initialize Workspace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="editor-layout">
      {/* Header */}
      <header className="editor-header">
        <div className="flex items-center gap-4">
          <span className="font-bold gradient-text" style={{ fontSize: '0.9rem' }}>VERTEX</span>
          <span>&bull;</span>
          <span>{activeFile} — Vertex Notes</span>
        </div>
      </header>

      {/* Activity Bar */}
      <aside className="activity-bar">
        <IconExplorer />
        <IconSearch />
        <div style={{ marginTop: 'auto', marginBottom: '1rem' }}>
          <IconSettings />
        </div>
      </aside>

      {/* Sidebar / Explorer */}
      <aside className="sidebar">
        <div className="sidebar-title">Explorer</div>
        <div className="explorer-list">
          {notes.map(note => (
            <div 
              key={note.name} 
              className={`explorer-item ${activeFile === note.name ? 'active' : ''}`}
              onClick={() => selectFile(note.name)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px' }}>
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {note.name}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Editor */}
      <main className="main-editor">
        <div className="editor-tabs">
          <div className="tab active">
             {activeFile}
          </div>
        </div>
        <textarea 
          className="editor-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          spellCheck="false"
        />
      </main>

      {/* Footer */}
      <footer className="editor-footer">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ width: '12px' }}>
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
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
    </div>
  );
}

export default App;
