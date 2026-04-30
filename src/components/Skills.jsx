import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'C', 'C++', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Eclipse', 'Postman', 'Vercel']
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'Operating Systems']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <h2>Technical Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {skillCategories.map((category, index) => (
          <div key={index} className="glass" style={{ padding: '2rem', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {category.skills.map((skill, i) => (
                <span key={i} style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  padding: '0.4rem 1rem', 
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
