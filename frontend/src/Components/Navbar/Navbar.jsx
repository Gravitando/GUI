import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <img src="\io.webp" alt="VirtuFit Logo" />
        </div>

        <div className="navbar-menu">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/Workout" className="navbar-item">Workout</Link>
          <Link to="/DietPlan" className="navbar-item">DietPlan</Link>
          <Link to="/AboutUs" className="navbar-item">AboutUs</Link>
          <Link to="/Login" className="navbar-item">Login</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
