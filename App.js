import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import './Navbar.css';
import './App.css';
import Navbar from './Navbar';

import './Destination.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
