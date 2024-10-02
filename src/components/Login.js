import React, { useState, useEffect } from 'react';
import './styles/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';  // Import bcryptjs for password comparison


const Login = () => {
  sessionStorage.setItem('isLoggedIn', 'false');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');  // State to store hashed password
  const navigate = useNavigate();
  useEffect(() => {
    const passwordInput = document.getElementById('password');
    const animation1 = document.getElementById('animation1');
    const animation2 = document.getElementById('animation2');
  
    const handlePasswordFocus = () => {
      animation1.style.display = 'none';
      animation2.style.display = 'block';
    };
  
    const showAnimation1 = () => {
      animation1.style.display = 'block';
      animation2.style.display = 'none';
    };
  
    passwordInput.addEventListener('focus', handlePasswordFocus);
    passwordInput.addEventListener('blur', showAnimation1);
  
    return () => {
      passwordInput.removeEventListener('focus', handlePasswordFocus);
      passwordInput.removeEventListener('blur', showAnimation1);
    };
  }, []);
  
  useEffect(() => {
    // Fetch the hashed password from the backend when the component mounts
    const fetchHashedPassword = async () => {
      try {
        const response = await axios.get('http://loknaathweb.free.nf/login.php', {
          withCredentials: true,
        });
        if (response.data.status === 'success') {
          setHashedPassword(response.data.hashed_password);
        } else {
          setErrorMessage('Error retrieving password.');
        }
      } catch (error) {
        setErrorMessage('Error fetching password.');
      }
    };
    fetchHashedPassword();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //console.log(hashedPassword);
      // Verify the entered password with the hashed password using bcryptjs
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

      if (isPasswordCorrect) {
       // alert('Login successful!');
        // Set session variables to track user login status
        sessionStorage.setItem('isLoggedIn', 'true');
         navigate('/Dash');
      } else {
        setErrorMessage('Invalid password. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during login.');
    }
  };

  return (
    <div className="container1">
      <div className="card1">
        <div className="cartoon">
          <img
            src="https://i.ibb.co/98gpLCQ/l1.png"
            alt="animation1"
            id="animation1"
          />
          <img
            src="https://i.ibb.co/Vq5j4Vg/l2.png"
            alt="animation2"
            id="animation2"
            style={{ display: 'none' }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h5>Hello LOKNAATH!</h5>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
