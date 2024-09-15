import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCodeBranch, faDesktop, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const projects = [
    {
        title: "Dating App",
        description: "A Flutter-based dating app featuring user profiles, matching algorithms, and real-time chat functionalities.",
        icon: faMobileAlt,
        color: "#ff5733"
    },
    {
        title: "PG Management App",
        description: "A React Native app for managing hostel accommodations, including student management, room allocation, and floor details.",
        icon: faCodeBranch,
        color: "#33c4ff"
    },
    {
        title: "News App",
        description: "An Android news app developed using Kotlin and Jetpack Compose, offering a modern interface and real-time news updates.",
        icon: faNewspaper,
        color: "#33ff5e"
    }
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <h1 className="projects-title">My Projects</h1>
                <div className="projects-wrapper">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-icon" style={{ backgroundColor: project.color }}>
                                <FontAwesomeIcon icon={project.icon} />
                            </div>
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
