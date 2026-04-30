import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section container">
      <h2>Education & Certifications</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
        
        {/* Education */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <GraduationCap color="var(--accent-blue)" size={32} />
            <h3 style={{ fontSize: '1.8rem' }}>Education</h3>
          </div>
          
          <div className="glass" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-cyan))' }}></div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Graphic Era Hill University</h4>
            <p style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>B.Tech in Computer Science and Engineering</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span>2023 - 2027</span>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>CGPA: 8.03</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Award color="var(--accent-cyan)" size={32} />
            <h3 style={{ fontSize: '1.8rem' }}>Certifications</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)', marginTop: '8px' }}></div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.3rem' }}>AWS Cloud Practitioner Essentials</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Amazon Web Services (2025)</p>
              </div>
            </div>
            
            <div className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', marginTop: '8px' }}></div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.3rem' }}>Mastering Data Structures and Algorithms with C and C++</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Abdul Bari, Udemy (2024)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
