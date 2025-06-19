import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link
          to={`/projects/${project.id}`}
          style={{
            ...styles.card,
            transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
            transition: 'transform 0.3s ease',
            textDecoration: 'none',
            color: 'inherit',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={project.thumbnail}
                alt={project.title}
                style={styles.image}
            />
            <div style={styles.info}>
                <div style={styles.title}>
                    <h3>
                      <span style={styles.titleLink}>{project.title}</span>
                    </h3>
                    <span style={styles.projectYear}>{project.year}</span>
                </div>
                <p style={styles.description}>{project.description}</p>
                <div
                  style={{
                    ...styles.learnMore,
                    backgroundColor: isHovered ? 'magenta' : 'transparent',
                    color: isHovered ? '#fff' : 'inherit',
                  }}
                >
                  Learn More
                </div>
            </div>
        </Link>
    );
}

const styles = {
    card: {
        width: '100%',
        height: 'fit-content',
        overflow: 'hidden',
        marginBottom: '1rem',
        backgroundColor: 'rgba(178, 178, 178, 0.11)',
        padding: '1rem',
        borderRadius: '1rem',
        border: '0.5px solid rgba(0, 0, 0, 0.1)',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '1rem',
    },
    info: {
        width: 'fit-content',
        marginTop: '1rem',
        borderRadius: '0.375rem',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '0.5rem',
    },
    titleLink: {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '1.5rem',
        lineHeight: '1.5',
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '600',
    },
    projectYear: {
        fontSize: '0.875rem',
        color: 'white',
        backgroundColor: 'rgba(178, 178, 178, 0.47)',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
        display: 'inline-block',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontWeight: '600',
    },
    description: {
        fontSize: '1rem',
        color: '#333',
        marginTop: '0.25rem',
        lineHeight: '1.4',
        fontWeight: '400',
        height: 'auto',
    },
    learnMore: {
        display: 'inline-block',
        padding: '0.5rem 0.5rem',
        border: '1px solid currentColor',
        borderRadius: '0.25rem',
        marginTop: '1rem',
        fontSize: '1rem',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
};
