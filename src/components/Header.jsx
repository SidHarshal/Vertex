import React from 'react';
import logoImg from '../assets/logo.png';

const Header = ({ activeFile }) => {
  return (
    <header className="editor-header">
      <div className="flex items-center gap-4">
        <img src={logoImg} alt="Vertex" style={{ height: '24px' }} />
        <span className="font-bold gradient-text" style={{ fontSize: '0.9rem' }}>VERTEX</span>
        <span>&bull;</span>
        <span className="text-muted">{activeFile} — Vertex Notes</span>
      </div>
    </header>
  );
};

export default Header;
