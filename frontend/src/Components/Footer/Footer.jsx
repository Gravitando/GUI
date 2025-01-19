import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a passionate team committed to helping you 
            achieve your fitness and nutrition goals. With our tools, 
            resources, and community, you’re never alone on your journey.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Workout">Workout</a></li>
            <li><a href="/DietPlan">Diet Plan</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/Contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact-section">
          <h3>Contact</h3>
          <p>Email: support@fitnessapp.com</p>
          <p>Phone: +123 456 789</p>
          <p>Address: 123 Fitness Lane, FitCity, FC 12345</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://youtube.com">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Image */}
      <img src="/src/assets/tgb.webp" alt="Footer Decoration" className="footer-image" />

    </footer>
  );
};

export default Footer;
