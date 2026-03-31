import React from 'react';
import { IconExplorer, IconSearch, IconSettings } from './Icons';

const ActivityBar = () => {
  return (
    <aside className="activity-bar">
      <IconExplorer className="activity-icon active" />
      <IconSearch className="activity-icon" />
      <div style={{ marginTop: 'auto', marginBottom: '1rem' }}>
        <IconSettings className="activity-icon" />
      </div>
    </aside>
  );
};

export default ActivityBar;
