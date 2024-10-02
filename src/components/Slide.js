import React from 'react';
import { Link } from "react-router-dom";

const Slide = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <>
            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <Link to="/Dash"> Dashboard </Link>
                <Link to="/Data"> Contact Responses </Link>
                <Link to="/Login"> Logout </Link>
                {/* <a href="#settings">Settings</a>
                <a href="#profile">Profile</a> */}
            </div>

            {/* Menu Logo (Hamburger Icon) */}
            <i 
                className={`fas fa-bars menu-icon ${isSidebarOpen ? 'menu-icon-active' : ''}`} 
                onClick={toggleSidebar}
            ></i>
        </>
    );
};

export default Slide;
