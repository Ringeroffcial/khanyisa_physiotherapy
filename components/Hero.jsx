import React, { useState, useEffect } from 'react';

const Hero = () => {
  const handleBookClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Khanyisa Physiotherapy's</span>
            </h1>
            <h1 className="hero-title">
              Say <span className="highlight">Hi To Improving Life </span>
            </h1>
            
            <p className="hero-subtitle">
              Expert care for pain relief, rehabilitation, and optimal physical health. 
              Helping you say yes to improving your life.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">9000+</div>
                <div className="stat-label">Patients Helped</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8 years</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Community Service</div>
                <div className="stat-label">2018</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Private sector</div>
                <div className="stat-label">2019</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Government Sector</div>
                <div className="stat-label">2020 - present</div>
              </div>
            </div>

            <div className="hero-cta">
              <button 
                className="btn btn-primary"
                onClick={handleBookClick}
              >
                Book Appointment
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleLearnMore}
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;