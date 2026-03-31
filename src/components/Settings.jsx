import React from 'react';
import { User, Palette, Shield, Info } from 'lucide-react';

const Settings = () => {
  return (
    <div className="editor-content animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="text-2xl mb-8 gradient-text">Vertex Settings</h2>
      
      {/* Account Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.8rem' }}>
          <User size={20} className="text-primary-light" />
          <h3 className="text-xl">Account Configuration</h3>
        </div>
        <div className="glass p-6 flex flex-column gap-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Professional Profile</div>
              <div className="text-muted text-sm">Managing core account identities and sync.</div>
            </div>
            <button className="btn-glass" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Edit Profile</button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Security Level</div>
              <div className="text-muted text-sm">Enterprise-grade MFA is active.</div>
            </div>
            <Shield size={18} className="text-secondary" />
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.8rem' }}>
          <Palette size={20} className="text-primary-light" />
          <h3 className="text-xl">Visual Preferences</h3>
        </div>
        <div className="grid gap-4">
          <div className="glass p-4 text-center glass-hover cursor-pointer border-primary-light" style={{ borderColor: 'var(--primary-light)' }}>
            <div className="font-bold mb-1">Vertex Dark (Default)</div>
            <div className="text-xs text-muted">Deep violet & cyan mesh</div>
          </div>
          <div className="glass p-4 text-center glass-hover cursor-pointer">
            <div className="font-bold mb-1">Cyberpunk</div>
            <div className="text-xs text-muted">Neon yellow & hot pink</div>
          </div>
          <div className="glass p-4 text-center glass-hover cursor-pointer">
            <div className="font-bold mb-1">Minimalist</div>
            <div className="text-xs text-muted">Muted greys & soft whites</div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={{ opacity: 0.5, marginTop: '4rem' }}>
        <div className="flex items-center gap-2 text-sm justify-center">
          <Info size={14} />
          Vertex V1.0.0 &bull; Built with Agentic Power
        </div>
      </section>
    </div>
  );
};

export default Settings;
