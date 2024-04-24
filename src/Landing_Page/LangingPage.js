import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Energy Efficiency Calculator</h1>
        <p>Save energy, save money, and reduce your carbon footprint!</p>
        <Link to="/calculate" className="cta-button">Get Started</Link>
      </header>
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature">
          <h3>Appliance Efficiency Calculator</h3>
          <p>Input details about your home appliances and find out how efficiently they are running.</p>
        </div>
        <div className="feature">
          <h3>Energy Saving Tips</h3>
          <p>Receive personalized recommendations on how to improve energy efficiency in your home.</p>
        </div>
        <div className="feature">
          <h3>Cost Savings Analysis</h3>
          <p>See how much money you can save by implementing energy-efficient practices.</p>
        </div>
      </section>
      <section className="trust-section">
        <h2>Trusted by Thousands</h2>
        <p>We are trusted by thousands of users for our accurate calculations and reliable energy efficiency tips.</p>
        <p>Our team of experts ensures 100% accuracy in our assessments. Have a question? Call our special team for assistance.</p>
        <button className="cta-button">Call Now</button>
      </section>

    </div>
  );
}

export default LandingPage;
