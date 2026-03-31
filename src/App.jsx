import React, { useState, useEffect } from 'react';
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
  const [lastActiveNote, setLastActiveNote] = useState('welcome.md');
  const [content, setContent] = useState('# Welcome to Vertex\n\nThis is your space to innovate. Start writing your notes here...');
  const [notes, setNotes] = useState([
    { name: 'welcome.md', content: '# Welcome to Vertex\n\nThis is your space to innovate. Start writing your notes here...' },
    { name: 'phase1_plan.md', content: '# Phase 1 Plan\n- Initialize UI Structure\n- Onboarding flow\n- VS Code Layout' },
    { name: 'architecture.txt', content: 'Vertex Core Architecture\n- React Frontend\n- Vite Build System\n- Glassmorphism Design' }
  ]);

  // Appearance State
  const [appBackground, setAppBackground] = useState(null);

  // Editor Mode State
  const [isEditMode, setIsEditMode] = useState(true);

  // Sidebar Logic
  const [activeView, setActiveView] = useState('explorer');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleView = (view) => {
    if (activeFile === 'Settings') {
      setActiveFile(lastActiveNote);
      setActiveView(view);
      setIsSidebarOpen(true);
      return;
    }

    if (activeView === view) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setActiveView(view);
      setIsSidebarOpen(true);
    }
  };

  const openSettings = () => {
    if (activeFile !== 'Settings') {
      setLastActiveNote(activeFile);
      setActiveFile('Settings');
      setIsSidebarOpen(false); 
    } else {
      setActiveFile(lastActiveNote);
      setIsSidebarOpen(true);
    }
  };

  // Resizing Logic
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = (e) => {
    setIsResizing(true);
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (e) => {
    if (isResizing) {
      const newWidth = e.clientX - 56;
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
    setLastActiveNote(fileName);
    setContent(note.content);
    setIsEditMode(true);
  };

  if (!isOnboarded) {
    return <OnboardingScreen onInitialize={() => setIsOnboarded(true)} />;
  }

  return (
    <div 
      className={`editor-layout ${!isSidebarOpen ? 'collapsed' : ''}`} 
      style={{ 
        '--sidebar-width': `${sidebarWidth}px`,
        backgroundImage: appBackground ? `url(${appBackground})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="mesh-bg" style={{ opacity: appBackground ? 0.3 : 1 }}></div>

      {/* Header */}
      <Header activeFile={activeFile} />

      {/* Activity Bar */}
      <ActivityBar 
        activeView={activeView} 
        activeFile={activeFile}
        onViewToggle={toggleView} 
        onSettingsClick={openSettings}
      />

      {/* Sidebar / Explorer */}
      <Sidebar 
        notes={notes} 
        activeFile={activeFile} 
        activeView={activeView}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
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
        isEditMode={isEditMode}
        onModeToggle={() => setIsEditMode(!isEditMode)}
        onContentChange={(val) => setContent(val)} 
        onAppBackgroundUpdate={setAppBackground}
      />

      {/* Footer */}
      <Footer 
        content={content} 
        isEditMode={isEditMode}
      />
    </div>
  );
}

export default App;
