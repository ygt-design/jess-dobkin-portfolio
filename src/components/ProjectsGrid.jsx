// src/components/ProjectsGrid.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

export default function ProjectsGrid() {
  return (
    <>
      <div className="projects-title"> 
        Projects
      </div>

      <section className="projects-grid">
        <div className="projects-grid-inner">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      {/* scoped styles */}
      <style jsx>{`
        .projects-grid {
          margin-top: 2rem;
        }
        .projects-grid-inner {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .projects-title {
          width: fit-content;
          background-color: rgba(178, 178, 178, 0.11);
          font-size: 1rem;
          color: black;
          padding: 1rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          display: flex;
        }

        /* tablet and below: single column */
        @media (max-width: 768px) {
          .projects-grid-inner {
            grid-template-columns: 1fr;
          }
        }

      `}</style>
    </>
  );
}