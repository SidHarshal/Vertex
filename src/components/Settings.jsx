import React from 'react';
import { 
  Box, LayoutGrid, Users, Tag, FolderOpen, 
  Files, Target, Puzzle, UserCircle, Bell, 
  ShieldCheck, Key, Keyboard, ChevronDown, CheckCircle2 
} from 'lucide-react';
import avatarImg from '../assets/avatar.png';

const Settings = () => {
  return (
    <div className="settings-container animate-fade-in">
      {/* Settings Sub-Sidebar */}
      <aside className="settings-sidebar">
        <div className="settings-sidebar-header">Settings</div>
        
        <nav>
          <div className="settings-nav-item"><Box size={18} /> Workspace</div>
          <div className="settings-nav-item"><LayoutGrid size={18} /> Overview</div>
          <div className="settings-nav-item"><Users size={18} /> Members</div>
          <div className="settings-nav-item"><Tag size={18} /> Label</div>
          <div className="settings-nav-item"><FolderOpen size={18} /> Projects</div>
          <div className="settings-nav-item"><Files size={18} /> Templates</div>
          <div className="settings-nav-item"><Target size={18} /> Initiatives</div>
          <div className="settings-nav-item"><Puzzle size={18} /> Integrations</div>
        </nav>

        <div className="settings-sidebar-header" style={{ marginTop: '2rem' }}>
          My Account <ChevronDown size={14} style={{ marginLeft: 'auto' }}/>
        </div>
        <nav>
          <div className="settings-nav-item active"><UserCircle size={18} /> Profile</div>
          <div className="settings-nav-item"><Bell size={18} /> Notifications</div>
          <div className="settings-nav-item"><ShieldCheck size={18} /> Security & Access</div>
          <div className="settings-nav-item"><Key size={18} /> API Keys</div>
          <div className="settings-nav-item"><Keyboard size={18} /> Keyboard shortcuts</div>
        </nav>
      </aside>

      {/* Main Settings Content */}
      <main className="settings-content-area">
        {/* Internal Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-10" style={{ opacity: 0.6 }}>
          My Account / <UserCircle size={14} /> Profile
        </div>

        {/* Profile Header */}
        <div className="profile-header">
          <img src={avatarImg} alt="Emily Johnson" className="profile-avatar" />
          <div>
            <h2 className="profile-name">
              Emily Johnson <CheckCircle2 size={24} color="#3b82f6" fill="#3b82f6" style={{ filter: 'brightness(1.2)' }} />
            </h2>
            <p className="profile-email">johnson@example.com</p>
          </div>
        </div>

        {/* Personal Details Card */}
        <div className="details-card">
          <div className="details-header">Personal details</div>
          
          <div className="details-row">
            <span className="details-label">Full name:</span>
            <span className="details-value">Emily Johnson</span>
          </div>
          <div className="details-row">
            <span className="details-label">Date of Birth:</span>
            <span className="details-value">January 1, 1987</span>
          </div>
          <div className="details-row">
            <span className="details-label">Gender:</span>
            <span className="details-value">Female</span>
          </div>
          <div className="details-row">
            <span className="details-label">Nationality:</span>
            <span className="details-value">American</span>
          </div>
          <div className="details-row">
            <span className="details-label">Address:</span>
            <span className="details-value">🇺🇸 California - United States</span>
          </div>
          <div className="details-row">
            <span className="details-label">Phone Number:</span>
            <span className="details-value">(213) 555-1234</span>
          </div>
          <div className="details-row">
            <span className="details-label" style={{ borderBottom: 'none' }}>Email:</span>
            <span className="details-value" style={{ borderBottom: 'none' }}>johnson@example.com</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
