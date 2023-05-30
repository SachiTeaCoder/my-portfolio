import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Project from './components/project/Project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     </Router>
  );
}

export default App;
