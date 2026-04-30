import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'RTSP Livestream Overlay App',
    tech: 'React, Flask, OpenCV',
    description: [
      'Developed a real-time RTSP streaming application using Flask and OpenCV for live video processing.',
      'Implemented customizable overlays with MongoDB data persistence.',
      'Designed MVC-based architecture with integrated CRUD APIs.'
    ],
    link: 'https://github.com/imLLUS1ON/RTSP-main'
  },
  {
    title: 'Collaborative Task Manager',
    tech: 'React, Node.js, Socket.io',
    description: [
      'Engineered a real-time task collaboration platform using Socket.io.',
      'Built Node.js/Express backend with MongoDB and schema validation.',
      'Implemented layered Controller-Service architecture.'
    ],
    link: 'https://github.com/imLLUS1ON/task-manager-main'
  },
  {
    title: 'Next.js REST Client',
    tech: 'Next.js, TypeScript',
    description: [
      'Built a REST API testing client supporting dynamic headers and HTTP methods (Postman Clone).',
      'Managed complex request states for concurrent API handling.',
      'Deployed via Vercel with CI/CD integration.'
    ],
    link: 'https://github.com/imLLUS1ON/postman-clone-main'
  },
  {
    title: 'Secure Intelligence Attendance System',
    tech: 'Python, MySQL, Computer Vision',
    description: [
      'Developed a secure attendance management system integrating biometric/face recognition validation.',
      'Designed role-based admin dashboards to monitor attendance records and analytics.',
      'Implemented database-backed authentication ensuring tamper-proof record storage.'
    ],
    link: 'https://github.com/imLLUS1ON/SecureAttendanceSystem'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2>Major Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass project-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <a href={project.link} style={{ color: 'var(--accent-blue)' }} aria-label="View Project">
                <ExternalLink size={20} />
              </a>
            </div>

            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 500 }}>
              {project.tech}
            </p>

            <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem', flexGrow: 1, color: 'var(--text-secondary)' }}>
              {project.description.map((point, i) => (
                <li key={i} style={{ marginBottom: '0.8rem' }}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        .project-card {
          transition: all 0.4s ease;
          border-top: 3px solid transparent;
        }
        .project-card:hover {
          transform: translateY(-10px);
          border-top-color: var(--accent-blue);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Projects;
