import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBrush, faDatabase, faMobileAlt, faCogs } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <h1 className="skills-title">My Skills</h1>
                <div className="skills-wrapper">
                    {/* Mobile Application Development */}
                    <div className="skill-category">
                        <FontAwesomeIcon icon={faMobileAlt} className="skill-icon" />
                        <h2>Mobile Application Development</h2>
                        <div className="skill-list">
                            <div className="skill">
                                <span>Android</span>
                                <div className="skill-bar">
                                    <div className="skill-progress android-progress"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Flutter</span>
                                <div className="skill-bar">
                                    <div className="skill-progress flutter-progress"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>React Native</span>
                                <div className="skill-bar">
                                    <div className="skill-progress react-native-progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Design */}
                    <div className="skill-category">
                        <FontAwesomeIcon icon={faBrush} className="skill-icon" />
                        <h2>Design</h2>
                        <div className="skill-list">
                            <div className="skill">
                                <span>Figma</span>
                                <div className="skill-bar">
                                    <div className="skill-progress figma-progress"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Photoshop</span>
                                <div className="skill-bar">
                                    <div className="skill-progress photoshop-progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="skill-category">
                        <FontAwesomeIcon icon={faCogs} className="skill-icon" />
                        <h2>Backend</h2>
                        <div className="skill-list">
                            <div className="skill">
                                <span>Node.js</span>
                                <div className="skill-bar">
                                    <div className="skill-progress nodejs-progress"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Laravel</span>
                                <div className="skill-bar">
                                    <div className="skill-progress laravel-progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="skill-category">
                        <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                        <h2>Database</h2>
                        <div className="skill-list">
                            <div className="skill">
                                <span>MySQL</span>
                                <div className="skill-bar">
                                    <div className="skill-progress mysql-progress"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>MSSQL</span>
                                <div className="skill-bar">
                                    <div className="skill-progress mssql-progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DSA & C++ */}
                    <div className="skill-category">
                        <FontAwesomeIcon icon={faCode} className="skill-icon" />
                        <h2>DSA & C++</h2>
                        <div className="skill-list">
                            <div className="skill">
                                <span>DSA</span>
                                <div className="skill-bar">
                                    <div className="skill-progress dsa-progress"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>C++</span>
                                <div className="skill-bar">
                                    <div className="skill-progress cpp-progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
