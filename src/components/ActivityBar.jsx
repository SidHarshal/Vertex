import React from 'react';
import { Files, Search, Settings } from 'lucide-react';

const ActivityBar = ({ activeView, onViewToggle }) => {
  return (
    <aside className="activity-bar">
      <div 
        className={`activity-icon ${activeView === 'explorer' ? 'active' : ''}`} 
        onClick={() => onViewToggle('explorer')}
      >
        <Files size={24} />
      </div>
      <div 
        className={`activity-icon ${activeView === 'search' ? 'active' : ''}`} 
        onClick={() => onViewToggle('search')}
      >
        <Search size={24} />
      </div>
      <div style={{ marginTop: 'auto', marginBottom: '1rem' }}>
        <Settings className="activity-icon" size={24} />
      </div>
    </aside>
  );
};

export default ActivityBar;
