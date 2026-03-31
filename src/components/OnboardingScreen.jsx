import React from 'react';
import onboardingImg from '../assets/Onboarding.png';

const OnboardingScreen = ({ onInitialize }) => {
  return (
    <div className="onboarding-screen">
      <div className="mesh-bg"></div>
      <div className="glass p-20 text-center animate-fade-in" style={{ maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={onboardingImg} alt="Experience Vertex" style={{ width: '90%', borderRadius: '1rem', marginBottom: '2.5rem', border: '1px solid var(--glass-border)' }} />
        <button className="btn-primary" onClick={onInitialize}>
          Initialize Workspace
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
