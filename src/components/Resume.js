import React from "react";
import "./styles/Resume.css"; // Import the updated CSS here
import profilePic from "./Images/resume.png"; // Ensure this path is correct for your image
import resumePDF from "./PDFs/resume.pdf"; // Import the PDF file
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="top-design">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#007bff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,128C672,128,768,160,864,170.7C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Header Section */}
      <div className="header">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile" className="profile-pic-img" />
        </div>
        <div className="personal-info pi">
          <h1>LOKNAATH L</h1>
          <p className="location"> <span className="fa fa-map-marker text-primary"></span> MADURAI, INDIA 625006</p>
          <p className="contact"> <span className="fa fa-phone text-primary"></span> +91 9345514946</p>
          <p className="contact"> <span className="fa fa-envelope text-primary"></span> loknaath@yahoo.com</p>
        </div>
      </div>
      {/* Download Resume Button */}
      <div className="download-button">
        <a href={resumePDF} download="Loknaath_Resume.pdf" className="btn-download">
          <i className="fa fa-download"></i>
        </a>
        <Link to="/" className="btn-home">
        <i className="fa fa-home"></i>
      </Link>
      </div>


    <div class="divider"> 
      <div class="child-divider"></div>
    </div>
      {/* Summary Section */}
      <div className="section">
        <h2>SUMMARY</h2>
        <p>
          I'm a Web Designer & Developer based in India, and I'm very passionate and
          dedicated to my work. I'm currently pursuing a Diploma course in Web Designing
          at TNGPTC, Madurai. I have acquired the skills necessary to build great websites.
          I have a strong understanding of web development principles, along with
          experience in designing and developing responsive websites using HTML, CSS, and
          JavaScript. I also possess backend knowledge of PHP, SQL, and server-side
          technologies.
        </p>
      </div>


      <div class="divider"> 
      <div class="child-divider"></div>
    </div>
      {/* Skills Section */}
      <div className="section skills-sec">
        <h2>SKILLS</h2>
        <div className="skills">
          <div>Supervision and Leadership</div>
          <div>Microsoft Office</div>
          <div>Web Development</div>
          <div>Database Management</div>
          <div>SQL</div>
          <div>PHP</div>
        </div>
      </div>


      <div class="divider"> 
      <div class="child-divider"></div>
    </div>
      {/* Education Section */}
      <div className="section" >
      <h2 style={{marginRight:"30px"}}>EDUCATION AND TRAINING</h2>
        <div className="education">
          <div className="edu1">
                <p>
                  <strong>Sree Narayana Guru Matric. Hr. Sec School,</strong> Kanchipuram, Tamilnadu. <br />
                  <span className="edu-part"><b> SSLC </b> <span className="year"> June 2022 </span> </span>
                </p>
          </div>
          <br></br>
          <div className="edu2">
                <p>
                  <strong>Tamilnadu Government Polytechnic College (Autonomous),</strong> Madurai, Tamilnadu. <br />
                  <span className="edu-part"> <b> Diploma in Web Designing / Pursuing </b> <span className="year"> August 2022 - ∞ </span> </span>
                </p>
          </div>
        </div>
      </div>


      <div class="divider"> 
      <div class="child-divider"></div>
    </div>
      {/* Projects Section */}
      <div className="section">
        <h2>PROJECTS DONE</h2>
        <div className="projects">
          <p>
            <strong>Website for National Service Scheme, TNGPTC</strong>
          </p>

          <p>
            Developed a web-based application for managing NSS activities, OD generation,
            and volunteer tracking using PHP, MySQL, and Bootstrap. <br />
            URL: <a href="http://nss.tngptcmadurai.com" target="_blank" rel="noreferrer">nss.tngptcmadurai.com</a>
          </p>
        </div>
      </div>


      <div class="divider"> 
      <div class="child-divider"></div>
    </div>
      {/* Community Service Section */}
      <div className="section">
        <h2 style={{marginRight:"60px"}}>COMMUNITY SERVICE<br /> & LEADERSHIP</h2>
        <div className="community-service">
          <p>
            <strong>NSS Volunteer</strong> <br />
            National Service Scheme (NSS) | Tamilnadu Government Polytechnic College <br />
            Aug 2022 - Present
          </p>
          <ul>
            <li>Participated in community service activities, including blood donation camps, environmental clean-up drives, and awareness campaigns.</li>
            <li>Collaborated with peers to organize and execute large-scale events for social causes.</li>
            <li>Developed leadership, teamwork, and organizational skills through active participation in NSS programs.</li>
            <li>Contributed to the upliftment of local communities, focusing on education, health, and environmental sustainability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
