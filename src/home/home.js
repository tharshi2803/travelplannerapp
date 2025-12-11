import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import './home.css';

export default function HomePage() {
  const navigate = useNavigate();
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const handleStart = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    alert("Please login or register before planning your trip.");
    navigate('/login');
    return;
  }

  navigate('/TravelPlannerApp');
};


  const handleLogin = () => {
    navigate('/login');
  };

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">
      {/* Header Navigation */}
      <header className="header">
        <div className="logo">🌏 Travel Planner</div>
        <nav className="navbar">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>About</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>Contact</a>
          <button className="login-btn" onClick={handleLogin}>
            <User size={20} />
            <span>Login / Register</span>
          </button>
        </nav>
      </header>

      {/* Hero Section with Video Background */}
      <section id="home" className="home-section">
        <video className="video-background" autoPlay muted loop playsInline>
          <source src="assets/bgvideo.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

        <div className="home-content">
          <div className="hero-icon">🌏</div>
          <h1>Welcome to Travel Planner</h1>
          <p>Plan your perfect trip with personalized budget, hotels, transport & food preferences.</p>
          <p>Your dream vacation starts here!</p>
          
          <div className="button-group">
            <button className="nav-btn primary-btn" onClick={handleStart}>
              ✈️ Start Planning Now
            </button>
            <button className="nav-btn secondary-btn" onClick={scrollToAbout}>
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We make travel planning effortless with AI-powered recommendations and real-time pricing.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Budget Friendly</h3>
              <p>Find the best deals within your budget</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏨</div>
              <h3>Quality Hotels</h3>
              <p>Choose from verified hotels with ratings</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚆</div>
              <h3>Multiple Transport</h3>
              <p>Flight, bus, or train - you decide</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Food Preferences</h3>
              <p>Veg, non-veg, or both - we got you covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <button className="nav-btn contact-btn">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Travel Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}