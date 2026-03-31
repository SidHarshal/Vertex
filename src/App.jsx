import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// Components
import Header from './components/Header';
import ActivityBar from './components/ActivityBar';
import Sidebar from './components/Sidebar';
import EditorArea from './components/EditorArea';
import Footer from './components/Footer';
import OnboardingScreen from './components/OnboardingScreen';

function App() {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [activeFile, setActiveFile] = useState('welcome.md');
  const [content, setContent] = useState('# Welcome to Vertex\n\nThis is your space to innovate. Start writing your notes here...');
  const [notes, setNotes] = useState([
    { name: 'welcome.md', content: '# Welcome to Vertex\n\nThis is your space to innovate. Start writing your notes here...' },
    { name: 'phase1_plan.md', content: '# Phase 1 Plan\n- Initialize UI Structure\n- Onboarding flow\n- VS Code Layout' },
    { name: 'architecture.txt', content: 'Vertex Core Architecture\n- React Frontend\n- Vite Build System\n- Glassmorphism Design' }
  ]);

  // Resizing Logic
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef(null);

  const startResizing = (e) => {
    setIsResizing(true);
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (e) => {
    if (isResizing) {
      const newWidth = e.clientX - 56; // 56 is the fixed width of ActivityBar
      if (newWidth > 150 && newWidth < 600) {
        setSidebarWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    } else {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing]);

  const selectFile = (fileName) => {
    const note = notes.find(n => n.name === fileName);
    setActiveFile(fileName);
    setContent(note.content);
  };

  if (!isOnboarded) {
    return <OnboardingScreen onInitialize={() => setIsOnboarded(true)} />;
  }

  return (
    <div 
      className="editor-layout" 
      style={{ '--sidebar-width': `${sidebarWidth}px` }}
    >
      {/* Header */}
      <Header activeFile={activeFile} />

      {/* Activity Bar */}
      <ActivityBar />

      {/* Sidebar / Explorer */}
      <Sidebar 
        notes={notes} 
        activeFile={activeFile} 
        onSelectFile={selectFile} 
      />

      {/* Resizer Handle */}
      <div 
        className={`resizer ${isResizing ? 'dragging' : ''}`} 
        onMouseDown={startResizing}
      />

      {/* Main Editor */}
      <EditorArea 
        activeFile={activeFile} 
        content={content} 
        onContentChange={(val) => setContent(val)} 
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
