// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import Resume from './Resume';
import bannerImage from './Images/myimg.png';
import Bio from './Bio';
import Header from './Header'; // Import the Header component
import Footer from './Footer';
import './styles/ui-portfolio.css';

const Home = () => {
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll to change header background
  useEffect(() => {
    const handleScroll = () => { 
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Script for the typing effect
  useEffect(() => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
  
    const textArray = ["Web Designer", "Web Developer", "Programmer"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    let typingTimeout, erasingTimeout;
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        erasingTimeout = setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        erasingTimeout = setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        typingTimeout = setTimeout(type, typingDelay + 500);
      }
    }
  
    // Initiating the typing effect
    if (textArray.length) typingTimeout = setTimeout(type, newTextDelay + 250);
  
    // Cleanup to prevent the effect from running multiple times
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, []);
  return (
    <div>
      <Header />  {/* Use Header component */}
      <section id="home" className="w3l-banner pt-5" style={{ marginTop: '-400px',zIndex: '1' }}>
        <section style={{ backgroundColor: 'rgba(6, 31, 36, 0.9)', }}>
          <div className="container pt-lg-5 pt-md-4" >
            <div className="row pt-lg-5 pt-4">
              <div className="col-lg-7 banner-info-grid pt-lg-0 pt-5 HomePageHeroHeader" style={{ marginTop: '500px', marginBottom: '240px' }}>
                <h1 className="mb-3">Hi, I'm Loknaath</h1>
                <h3 className="mb-4">
                  <span className="typed-text"></span>
                  <span className="cursor">&nbsp;</span>
                </h3>
                <p>I am passionate about Web Design and Development and have been building my portfolio since 2022. Currently pursuing a Diploma Course, I'm ready to give your business a fresh, creative start!</p>
                <a className="btn btn-primary btn-style mt-5 me-2 fl-str" href="mailto:loknaath@yahoo.com"> Hire Me </a>
                <NavLink className="btn btn-primary btn-style mt-5 fl-str resume-btn" to="/Resume"> Resume </NavLink>
           
              </div>
              {/* <div className="col-lg-5 text-lg-end my-image " style={{ marginTop: '300px', marginBottom: '0px' }} >
              <img src={bannerImage} className="img-fluid" alt="John Watson" />
              </div> */}
            </div>
          </div>
        </section>
      </section>
      
      <Bio />
      
      <Footer/>
    </div>
  );
};

export default Home;

