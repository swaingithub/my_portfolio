import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Me</h2>
                    <p>I am a passionate Mobile application developer dedicated to building innovative solutions. Explore my work and get in touch for collaborations or opportunities.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2>Connect Me</h2>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/raka1/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
                        </a>
                        <a href="https://github.com/swaingithub" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="social-icon github" />
                        </a>
                        <a href="https://x.com/SwainRakesh990?t=6SM2WvjGah7ZMTovVA2k-A&s=09" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Rakesh Swain. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
