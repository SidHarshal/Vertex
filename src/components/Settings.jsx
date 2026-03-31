import React, { useState } from 'react';
import { 
  Box, LayoutGrid, Users, Tag, FolderOpen, 
  Files, Target, Puzzle, UserCircle, Bell, 
  ShieldCheck, Palette, Keyboard, ChevronDown, CheckCircle2,
  Upload, Type, Monitor
} from 'lucide-react';
import avatarImg from '../assets/avatar.png';

const Settings = ({ onAppBackgroundUpdate }) => {
  const [activeSection, setActiveSection] = useState('profile');

  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onAppBackgroundUpdate(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
          My Account
        </div>
        <nav>
          <div 
            className={`settings-nav-item ${activeSection === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveSection('profile')}
          >
            <UserCircle size={18} /> Profile
          </div>
          <div 
            className={`settings-nav-item ${activeSection === 'appearance' ? 'active' : ''}`}
            onClick={() => setActiveSection('appearance')}
          >
            <Palette size={18} /> Appearance
          </div>
          <div className="settings-nav-item"><Bell size={18} /> Notifications</div>
          <div className="settings-nav-item"><ShieldCheck size={18} /> Security & Access</div>
          <div className="settings-nav-item"><Keyboard size={18} /> Keyboard shortcuts</div>
        </nav>
      </aside>

      {/* Main Settings Content */}
      <main className="settings-content-area">
        {activeSection === 'profile' ? (
          <>
            {/* Profile View */}
            <div className="flex items-center gap-2 text-sm mb-10" style={{ opacity: 0.6 }}>
              My Account / <UserCircle size={14} /> Profile
            </div>

            <div className="profile-header">
              <img src={avatarImg} alt="Emily Johnson" className="profile-avatar" />
              <div>
                <h2 className="profile-name">
                  Emily Johnson <CheckCircle2 size={24} color="#3b82f6" fill="#3b82f6" style={{ filter: 'brightness(1.2)' }} />
                </h2>
                <p className="profile-email">johnson@example.com</p>
              </div>
            </div>

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
          </>
        ) : (
          <>
            {/* Appearance View */}
            <div className="flex items-center gap-2 text-sm mb-10" style={{ opacity: 0.6 }}>
              My Account / <Palette size={14} /> Appearance
            </div>

            <h1 className="text-3xl mb-8 gradient-text">Appearance</h1>

            {/* Background Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.8rem' }}>
                <Monitor size={20} className="text-secondary" />
                <h3 className="text-xl">Application Background</h3>
              </div>
              <div className="glass p-6 text-center">
                <p className="text-muted mb-4">Choose an image to customize your specialized workspace environment.</p>
                <label className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Upload size={18} />
                  Upload Photo
                  <input type="file" hidden accept="image/*" onChange={handleBackgroundUpload} />
                </label>
              </div>
            </section>

            {/* Font Section */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.8rem' }}>
                <Type size={20} className="text-secondary" />
                <h3 className="text-xl">Font Personalization</h3>
              </div>
              <div className="grid gap-4">
                <div className="glass p-4 border-primary-light" style={{ borderColor: 'var(--primary-light)', cursor: 'pointer' }}>
                  <div className="font-bold">Inter (Default)</div>
                  <div className="text-xs text-muted">Clean, modern geometric sans-serif.</div>
                </div>
                <div className="glass p-4 glass-hover" style={{ cursor: 'pointer' }}>
                  <div className="font-bold" style={{ fontFamily: 'var(--font-mono)' }}>JetBrains Mono</div>
                  <div className="text-xs text-muted">Specialized developer-centric typeface.</div>
                </div>
              </div>
            </section>

            {/* Reset Button */}
            <button className="btn-glass" onClick={() => onAppBackgroundUpdate(null)} style={{ opacity: 0.6 }}>
              Reset to Default Mesh
            </button>
          </>
        )}
      </main>
    </div>
  );
};

export default Settings;
