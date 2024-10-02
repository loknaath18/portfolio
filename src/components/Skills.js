import React, { useState, useEffect } from 'react';
import './styles/ui-portfolio.css'; // Ensure external CSS is loaded for styling 

const Skills = () => {
    const [skills, setSkills] = useState({
        html: 0,
        css: 0,
        javascript: 0,
        php: 0,
        creativity: 0,
        communication: 0,
        problemSolving: 0,
        teamwork: 0,
    });

    useEffect(() => {
        const incrementProgress = () => {
            setSkills(prevSkills => ({
                html: Math.min(prevSkills.html + 1, 90),
                css: Math.min(prevSkills.css + 1, 60),
                javascript: Math.min(prevSkills.javascript + 1, 65),
                php: Math.min(prevSkills.php + 1, 85),
                creativity: Math.min(prevSkills.creativity + 1, 70),
                communication: Math.min(prevSkills.communication + 1, 85),
                problemSolving: Math.min(prevSkills.problemSolving + 1, 75),
                teamwork: Math.min(prevSkills.teamwork + 1, 95),
            }));
        };

        const interval = setInterval(incrementProgress, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Skills & Expertise Section */}
            <section className="skills-section">
                <div className="container">
                    <div className="skills-container">
                        {/* Technical Skills */}
                        <div className="skills-box">
                           <div className="main-title">
                            <h3>Technical Skills</h3>
                           </div>
                            <div className="skill" style={{ marginTop: '30px'}}>
                                <span>HTML</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${skills.html}%` }}>
                                        {skills.html}%
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>CSS</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${skills.css}%` }}>
                                        {skills.css}%
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>JavaScript</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${skills.javascript}%` }}>
                                        {skills.javascript}%
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>PHP</span>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${skills.php}%` }}>
                                        {skills.php}%
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Professional Skills */}
                        <div className="professional-skills">
                            <h3>Professional Skills</h3>
                            <div className="professional-skills-grid">
                                <div className="skill-item">
                                    <div className="circle" style={{ "--percentage": `${skills.creativity}%` }}>
                                        <span>{skills.creativity}%</span>
                                    </div>
                                    <p>Creativity</p>
                                </div>
                                <div className="skill-item">
                                    <div className="circle" style={{ "--percentage": `${skills.problemSolving}%` }}>
                                        <span>{skills.problemSolving}%</span>
                                    </div>
                                    <p>Problem Solving</p>
                                </div>
                                <div className="skill-item">
                                    <div className="circle" style={{ "--percentage": `${skills.communication}%` }}>
                                        <span>{skills.communication}%</span>
                                    </div>
                                    <p>Communication</p>
                                </div>
                                <div className="skill-item">
                                    <div className="circle" style={{ "--percentage": `${skills.teamwork}%` }}>
                                        <span>{skills.teamwork}%</span>
                                    </div>
                                    <p>Teamwork</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
