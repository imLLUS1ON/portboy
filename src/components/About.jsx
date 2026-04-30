import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2>About Me</h2>
      <div className="glass animate-fade-in" style={{ padding: '3rem', marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
          I am a 3rd year B.Tech Computer Science student with strong foundations in Data Structures, OOP, and Software Development.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          I am actively learning and building full-stack, real-time, and security-focused applications using modern web technologies.
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          Passionate about backend engineering, system design, and leveraging AI tools to boost developer productivity and workflow efficiency.
        </p>
        
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>Location</h4>
            <p>Dehradun, India</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>Phone</h4>
            <p>+91-8392909180</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
