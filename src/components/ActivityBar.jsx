import React from 'react';
import { Files, Search, Settings } from 'lucide-react';

const ActivityBar = () => {
  return (
    <aside className="activity-bar">
      <Files className="activity-icon active" size={24} />
      <Search className="activity-icon" size={24} />
      <div style={{ marginTop: 'auto', marginBottom: '1rem' }}>
        <Settings className="activity-icon" size={24} />
      </div>
    </aside>
  );
};

export default ActivityBar;
