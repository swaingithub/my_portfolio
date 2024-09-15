import React from 'react';
import './About.css';
import resumePDF from '../assets/resume.pdf'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <img src={require('../assets/profile.jpg')} alt="Profile" />
                    </div>
                    <div className="about-text">
                        <h1>About Me</h1>
                        <p>
                            I am a mobile application developer with 2 years of experience specializing in Android development and Flutter. I have developed a range of applications using these technologies and am proficient in React Native as well.
                        </p>
                        <p>
                            My expertise extends to Figma for designing user interfaces and user experiences. Additionally, I have a solid understanding of Data Structures and Algorithms (DSA) and am skilled in C++ class-based programming languages.
                        </p>
                        <a href="#contact" className="about-btn">Let's Connect</a>
                        <a href={resumePDF} download="Resume.pdf" className="about-btn resume-btn">
                            <FontAwesomeIcon icon={faDownload} className="resume-icon" />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
