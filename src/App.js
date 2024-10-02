import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Login from './components/Login';
import Dash from './components/Dash';
import Data from './components/Data';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dash" element={<Dash />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
    </Router>
    
  );
};

export default App;

