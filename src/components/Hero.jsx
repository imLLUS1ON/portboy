import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px' }}>
      <div className="bg-glow"></div>
      <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Welcome to my portfolio
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Hi, I'm <br />
            <span className="text-gradient">Priyanshu Negi</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 400 }}>
            Computer Science Student
          </h2>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#about" className="btn btn-outline">
              About Me
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="#" className="social-icon" aria-label="GitHub"><Github /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:email@example.com" className="social-icon" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </div>
      
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
        <a href="#about" style={{ color: 'var(--text-secondary)' }}>
          <ArrowDown />
        </a>
      </div>

      <style>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: var(--accent-blue);
          border-color: var(--accent-blue);
          transform: translateY(-3px);
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
