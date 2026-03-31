import React from 'react';
import { Files, Search, Settings } from 'lucide-react';

const ActivityBar = ({ activeView, activeFile, onViewToggle, onSettingsClick }) => {
  return (
    <aside className="activity-bar">
      <div 
        className={`activity-icon ${activeView === 'explorer' && activeFile !== 'Settings' ? 'active' : ''}`} 
        onClick={() => onViewToggle('explorer')}
      >
        <Files size={24} />
      </div>
      <div 
        className={`activity-icon ${activeView === 'search' && activeFile !== 'Settings' ? 'active' : ''}`} 
        onClick={() => onViewToggle('search')}
      >
        <Search size={24} />
      </div>
      <div 
        style={{ marginTop: 'auto', marginBottom: '1rem' }}
        className={`activity-icon ${activeFile === 'Settings' ? 'active' : ''}`}
        onClick={onSettingsClick}
      >
        <Settings size={23} />
      </div>
    </aside>
  );
};

export default ActivityBar;
