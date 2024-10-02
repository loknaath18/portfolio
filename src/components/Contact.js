import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // New states for handling success and error messages
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = { name, email, subject, message };

    // Insert data into database using POST
    axios.post('http://localhost:8080/mproject/insert_profile.php', profileData)
      .then(response => {
        if (response.data.message) {
          setSuccessMessage(response.data.message);  // Set success message
          setErrorMessage('');  // Clear any previous error message
        } else if (response.data.error) {
          setErrorMessage(response.data.error);  // Set error message
          setSuccessMessage('');  // Clear any previous success message
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setErrorMessage('An error occurred while submitting the form.');
        setSuccessMessage('');  // Clear any previous success message
      });
  };

  return (
    <>
      <Header />
      <div className="ftco-section" style={{ marginTop: '120px', marginLeft: '-200px'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12" style={{marginTop: '100px', marginBottom: '100px'}}>
              <div className="wrapper">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Want to get in touch?</h3>

                  {/* Bootstrap Success and Error Alerts */}
                  {successMessage && (
                    <div className="alert alert-success" role="alert">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            placeHolder="Name"
                            type="text"
                            className="form-control in-field"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            placeHolder="Email"
                            className="form-control in-field email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeHolder="Subject"
                            className="form-control in-field"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeHolder="Message"
                            className="form-control"
                            id="message"
                            cols="30"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="submit" value="Submit Now" className="btn btn-primary" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
