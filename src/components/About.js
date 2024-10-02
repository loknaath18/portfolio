import React from 'react';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import Skills from './Skills';
import Bio from './Bio';
import './styles/ui-portfolio.css';// Import external CSS for styling
import { useEffect } from 'react';
import projectImage1 from './Images/nssproj.png'; // Add your project images here
import projectImage2 from './Images/rabbi.png';
import projectImage3 from './Images/srwwo.png';

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 }
        );
    
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => observer.observe(item));
    
        return () => {
            timelineItems.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <div style={{ backgroundColor: 'white' }}>
            <div style={{ marginTop: '120px' }}>
                <Header /> {/* Render the Header component */}
            </div>
            <div className='about-kk'>
                        <Bio />
            </div>

            <Skills />

            {/* Skills & Expertise Section */}
            <section className="timeline-section">
                <div className="container">
                    <h2 className="section-title">Education & Certifications</h2>
                    <ul className="timeline">
                        <li className="timeline-item animated">
                            <h4 className="timeline-heading">Diploma in Web Designing</h4>
                            <p className="timeline-description">Currently pursuing at TNGPTC, Madurai (2022 - ∞)</p>
                        </li>
                        <li className="timeline-item animated">
                            <h4 className="timeline-heading">SSLC</h4>
                            <p className="timeline-description">Completed at SNGMHSS, Kanchipuram <br></br> (2021 - 2022)</p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* Projects Completed Section */}
<section className="projects-section">
    <div className="container">
        <h2 className="section-title">Projects Completed</h2>
        <div className="projects-grid">
            <div className="project-box">
                <img src={projectImage1} alt="Project 1" className="project-image" />
                <h4 className="project-title">Web Application for National Service Scheme, TNGPTC</h4>
                <p className="project-description">Designed and Developed a web-based application for managing NSS activities, OD generation, and volunteer tracking using PHP, MySQL, and Bootstrap.</p>
                <a href="https://nss.tngptcmadurai.com" className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
            <div className="project-box">
                <img src={projectImage2} alt="Project 2" className="project-image" />
                <h4 className="project-title">Web Application for Rabbi Global Academy.</h4>
                <p className="project-description">For the Rabbi Global Academy web application, I was involved in enhancing the existing website by addressing several bugs and improving functionality. </p>
                <a href="https://apprabbiglobalacademy.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
            <div className="project-box">
                <img src={projectImage3} alt="Project 3" className="project-image" />
                <h4 className="project-title">Web Application for SRWWO, Madurai Division</h4>
                <p className="project-description">As part of the SRWWO Madurai Division web application, I contributed to refining the existing platform by addressing several bugs and enhancing the functionality.</p>
                <a href="https://srwwo.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
        </div>
    </div>
</section>


            <Footer /> {/* Render the Footer component */}
        </div>
    );
};

export default About;
