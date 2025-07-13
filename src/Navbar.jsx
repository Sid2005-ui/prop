import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Siddhant 2K22/E/263</Link>
      
    
      <ul className="nav-links">
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">My Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
