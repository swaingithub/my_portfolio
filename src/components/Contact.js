import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h1 className="contact-title">Get in Touch</h1>
                <div className="contact-wrapper">
                    {/* Contact Form */}
                    <div className="contact-form">
                        <h2>Contact Form</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="contact-details">
                        <h2>Contact Details</h2>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                <span>Email: <a href="mailto:example@example.com">swainrakesh990@gmail.com</a></span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                                <span>Phone: <a href="tel:+91 9776608965">+91 9776608965</a></span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                                <span>Location: Garebhavi palaya Hasur road, Benguluru, India</span>
                            </li>
                        </ul>

                        {/* Social Media Links */}
                        <div className="social-links">
                            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
                            </a>
                            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} className="social-icon github" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
