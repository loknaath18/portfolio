import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/ui-portfolio.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Toggle Navbar on mobile
  const handleToggle = () => {
    setIsToggled(!isToggled); // Toggles between true and false
  };

  return (
    <header id="site-header" className={`main-header fixed-top ${scrolling ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <h1>
            <NavLink className="navbar-brand" to="/Login">
              <i className="fab fa-dev"></i> WEBDEV14
            </NavLink>
          </h1>

          <button
            className={`navbar-toggler ${isToggled ? '' : 'collapsed'}`}
            type="button"
            onClick={handleToggle}
            aria-expanded={isToggled ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon fa ${isToggled ? 'fa-times' : 'fa-bars'}`}></span>
          </button>

          <div className={`collapse navbar-collapse ${isToggled ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active-link">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="header-btn hire-me mx-lg-2">
              <a className="btn btn-style hire-me-btn" href="mailto:loknaath@yahoo.com" rel="noopener noreferrer">
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
