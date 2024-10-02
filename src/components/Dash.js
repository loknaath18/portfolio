import React, { useState } from 'react';
import './styles/login.css'; // Assuming the styles are in a separate file
import Slide from './Slide';

const Dash = () => {
    // Redirect to home if the user is not logged in
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = '/Login';
    }

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="dash-container">
            {/* Sidebar */}
            <Slide isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div className={`main-content ${isSidebarOpen ? 'main-content-shift' : ''}`}>
                <div className="welcome-container">
                    <h1 className="welcome-message">Welcome, LOKNAATH!</h1>
                    <p className="main-text">This is your personalized dashboard. Manage your tasks and stay updated!</p>
                </div>
            </div>
        </div>
    );
};

export default Dash;
