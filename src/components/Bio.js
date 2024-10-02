import React from 'react';
import aboutimage from './Images/about.png';
const Bio = () => {
    
return(
    <section className="about-me" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-image">
                                <img className="img-responsive" src={aboutimage} alt="About" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 mt-5">
                            <div className="about-info">
                                <div className="main-title">
                                    <h2>About Me</h2>
                                </div>
                                <h3>Hello! I am Loknaath L</h3>
                                <p>
                                    I'm a Web Designer &amp; Developer based in India, and I'm very passionate
                                    and dedicated to my work. I'm currently pursuing a Diploma course in Web
                                    Designing at TNGPTC, Madurai. I have acquired the skills necessary to build
                                    great websites. I have a strong understanding of web development principles,
                                    along with experience in designing and developing responsive websites using
                                    HTML, CSS, and JavaScript. I also possess backend knowledge of PHP, SQL, and
                                    server-side technologies.
                                </p>
                                <div className="personal-info">
                                    <p><span><i className="fa fa-user"></i></span>LOKNAATH L</p>
                                    <p><span><i className="fa fa-phone"></i></span> +91 9345514946</p>
                                    <p><span><i className="fa fa-envelope"></i></span>loknaath@yahoo.com</p>
                                    <p><span><i className="fa fa-map-marker"></i></span>Tamilnadu, India</p>
                                    <div className="social-media">
                                        <span>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="https://www.instagram.com/loknaath._.17._/"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-dribbble"></i></a>
                                            <a href="#"><i className="fab fa-linkedin"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
);
};
export default Bio;    