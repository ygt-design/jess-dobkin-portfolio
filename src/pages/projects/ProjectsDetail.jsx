import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../../data/projects.json';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  return (
    <>
      {project ? (
        <div className="project-detail">
            <div className='projectText'>
                <div className="projectTextLeft">
                      <h1 className="projectTitle">{project.title}</h1>
                     <span className="year">{project.year}</span>
                </div>
                <div className='projectTextRight'>
                    <p className="description">{project.mainDescription}</p>
                </div>
            </div>
        
          <img src={project.thumbnail} alt={project.title} className="thumbnail" />
          <div className="image-grid">
            {project.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${project.title} image ${idx + 1}`}
                className="detail-image"
              />
            ))}
          </div>
          <div className="back-button">
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      ) : (
        <div className="not-found">
          <h2>Sorry, project not found</h2>
          <Link to="/" className="back-link">← Back home</Link>
        </div>
      )}

      <style jsx>{`
        .project-detail {
          max-width: 900px;
          margin: auto;
        }
        .projectTitle {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .year {
            fontSize: 0.875rem;
            color: white;
            background-color: rgba(178, 178, 178, 0.47);
            padding: 0.25rem 0.5rem;
            borderRadius: 0.25rem;
            display: inline-block;
            textTransform: uppercase;
            letterSpacing: 0.05em;
            fontWeight: 600;
            border-radius: 0.375rem;
        }

        .thumbnail {
          width: 100%;
          border-radius: 1rem;
          margin: 1rem 0;
          object-fit: cover;
        }
        .description {
          line-height: 1.6;
          font-size: 1rem;
          border-radius: 0.5rem;
            margin-bottom: 1.5rem;
            margin-top: 1rem;
            max-width: 100%;
        }
        .back-button {
          margin-top: 2rem;
        }
        .back-link {
          text-decoration: none;
          color: #E76F51;
          font-weight: 500;
        }
        .not-found {
          padding: 2rem;
          text-align: center;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .detail-image {
          width: 100%;
          border-radius: 1rem;
          object-fit: cover;
        }
        .projectText{
            padding-top: 7rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .projectTextRight {
            margin-top: -0.75rem;
        }

      `}</style>
    </>
  );
}