import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slide from './Slide';
import './styles/login.css';  // New CSS file

const Data = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [contactData, setContactData] = useState([]);

    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = '/Login';
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/mproject/get_contact_data.php')
            .then(response => {
                setContactData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <>
        <section id="contact-data">
            {/* Pass the state and toggle function to Slide */}
            <Slide isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`main-content ${isSidebarOpen ? 'main-content-shift' : ''}`}>
                <div className="content-header" style={{ marginLeft: '50px' }}>
                    <h2>Contact Data</h2>
                    <p className="welcome-message">Welcome, LOKNAATH!</p>
                </div>
                <Table striped bordered hover className="contact-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.subject}</td>
                                <td>{item.message}</td>
                                <td>{item.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            </section>
        </>
    );
};

export default Data;
