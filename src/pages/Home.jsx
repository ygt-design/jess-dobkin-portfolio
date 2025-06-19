import React from 'react';
import './Home.css';
import Grid from '../components/Grid';
import Typewriter from '../components/Typewriter';
import ProjectsGrid from '../components/ProjectsGrid';
import Highlights from '../components/Highlights';

export default function Home() {
return (
    <div className="home-container">
        <Grid>
            <section className="hero-section">
                <h1 className="hero-title">
                    Jess Dobkin has been a working{' '}
                    <span style={{ color: 'magenta' }}>
                        <Typewriter
                            words={[
                                'artist',
                                'curator',
                                'community activist',
                                'teacher',
                                'mentor'
                            ]}
                        />
                    </span>{' '}
                    <br />
                    for more than 30 years.
                </h1>
            </section>
            <div style={{ gridColumn: '1 / -1', width: '100%' }}>
                <Highlights />
                <ProjectsGrid />
            </div>
        </Grid>
    </div>
);
}
