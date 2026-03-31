import React from 'react';
import logoImg from '../assets/logo.png';
import step1Img from '../assets/step1.png';
import step2Img from '../assets/step2.png';
import step3Img from '../assets/step3.png';

const OnboardingScreen = ({ onInitialize }) => {
  return (
    <div className="onboarding-screen" style={{ 
      background: 'rgba(10, 10, 12, 0.95)',
      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
      backgroundSize: '40px 40px',
      overflow: 'hidden'
    }}>
      {/* Abstract geometric line-art patterns */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', border: '1px solid rgba(147, 51, 234, 0.1)', transform: 'rotate(45deg)', borderRadius: '10%' }}></div>
      <div style={{ position: 'absolute', bottom: '-5%', right: '-5%', width: '30%', height: '30%', border: '1px solid rgba(6, 182, 212, 0.1)', transform: 'rotate(-20deg)', borderRadius: '5%' }}></div>

      {/* Top Left Header */}
      <div style={{ position: 'absolute', top: '2rem', left: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={logoImg} alt="Vertex" style={{ height: '32px', filter: 'hue-rotate(240deg) brightness(1.2)' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: '400', color: '#64748b', letterSpacing: '0.05em' }}>Vertex</span>
      </div>

      <div className="flex flex-column items-center animate-fade-in" style={{ zIndex: 10 }}>
        {/* Illustration Cards */}
        <div className="flex gap-10 mb-20">
          {[
            { id: 1, title: "Step 1: Write Everything", img: step1Img },
            { id: 2, title: "Step 2: Connect Ideas", img: step2Img },
            { id: 3, title: "Step 3: Access Anywhere", img: step3Img }
          ].map(card => (
            <div key={card.id} className="glass" style={{ width: '300px', padding: '1.5rem', borderRadius: '1.2rem', background: 'rgba(40, 40, 45, 0.3)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', height: '220px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              </div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', opacity: 0.9 }}>{card.title}</h4>
            </div>
          ))}
        </div>

        {/* Welcome Text */}
        <h2 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '3rem', fontWeight: '500' }}>
          Welcome to Vertex! Let's get your ideas flowing.
        </h2>

        {/* Action Button */}
        <button 
          className="btn-primary" 
          onClick={onInitialize}
          style={{ padding: '1.2rem 4rem', fontSize: '1.1rem', borderRadius: '2rem', background: 'linear-gradient(135deg, #9333ea, #06b6d4)' }}
        >
          Get Started
        </button>
      </div>

      {/* Skip Tour Button */}
      <button 
        onClick={onInitialize}
        style={{ position: 'absolute', bottom: '2rem', right: '3rem', background: 'white', color: 'black', border: 'none', padding: '0.6rem 1.5rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Skip Tour
      </button>
    </div>
  );
};

export default OnboardingScreen;
