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
      <main className="settings-content-area flex-column items-center">
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          {activeSection === 'profile' ? (
          <>
            {/* Profile View */}
            <div className="appearance-breadcrumb" style={{ marginBottom: '3.5rem' }}>
              My Account / <UserCircle size={14} /> Profile
            </div>

            <div className="profile-header">
              <img src={avatarImg} alt="Emily Johnson" className="profile-avatar" />
              <div>
                <h2 className="profile-name">
                  Emily Johnson <CheckCircle2 size={24} color="#3b82f6" style={{ filter: 'brightness(1.1)' }} />
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
                <span className="details-label">Email:</span>
                <span className="details-value">johnson@example.com</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Appearance View */}
            <div className="appearance-breadcrumb" style={{ marginBottom: '3.5rem' }}>
              My Account / <Palette size={14} /> Appearance
            </div>

            <div className="profile-header" style={{ marginBottom: '4rem' }}>
              <div className="profile-avatar flex items-center justify-center p-0" style={{ background: 'rgba(147, 51, 234, 0.1)', borderStyle: 'dashed' }}>
                <Palette size={64} className="text-primary-light" />
              </div>
              <div>
                <h2 className="profile-name">Appearance</h2>
                <p className="profile-email">Personalize your specialized workspace environment</p>
              </div>
            </div>

            {/* Background Section */}
            <div className="details-card" style={{ marginBottom: '4rem' }}>
              <div className="details-header flex items-center gap-2">
                <Monitor size={18} className="text-secondary" />
                Application Background
              </div>
              <div className="p-12 text-center">
                <p className="text-muted mb-6">Choose an image to customize your specialized workspace environment.</p>
                <label className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 2.8rem' }}>
                  <Upload size={20} />
                  Upload Photo
                  <input type="file" hidden accept="image/*" onChange={handleBackgroundUpload} />
                </label>
              </div>
            </div>

            {/* Font Section */}
            <div className="details-card" style={{ marginBottom: '4rem' }}>
              <div className="details-header flex items-center gap-2">
                <Type size={18} className="text-secondary" />
                Font Personalization
              </div>
              <div className="font-grid p-8">
                <div className="details-card p-6" style={{ borderColor: 'var(--primary-light)', cursor: 'pointer', background: 'rgba(147, 51, 234, 0.05)' }}>
                  <div className="font-bold text-lg mb-1">Inter (Default)</div>
                  <div className="text-sm text-muted">Clean, modern geometric sans-serif for optimal readability.</div>
                </div>
                <div className="details-card p-6 glass-hover" style={{ cursor: 'pointer' }}>
                  <div className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-mono)' }}>JetBrains Mono</div>
                  <div className="text-sm text-muted">Specialized developer-centric typeface with improved ligatures.</div>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <div className="mt-10" style={{ marginBottom: '4rem' }}>
              <button className="btn-glass" onClick={() => onAppBackgroundUpdate(null)} style={{ opacity: 0.6, fontSize: '0.8rem' }}>
                Reset to Default Vertex Mesh
              </button>
            </div>
          </>
        )}
        </div>
      </main>
    </div>
  );
};

export default Settings;
