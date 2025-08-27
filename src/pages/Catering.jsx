import React from 'react';
import '../styles/Catering.css'; // Assuming you'll create this CSS file

const Catering = () => {
  return (
    <div className="catering-container">
      <div className="catering-hero">
        <h1>Catering Services</h1>
        <p>Let Alita Cafe make your next event special</p>
      </div>

      <section className="catering-info">
        <h2>Our Catering Options</h2>
        <p>Whether you're planning a corporate event, wedding, or private party, we offer flexible catering solutions tailored to your needs.</p>
        
        <div className="catering-packages">
          <div className="package">
            <h3>Breakfast & Brunch</h3>
            <p>Start your day with our selection of pastries, coffee, and breakfast favorites.</p>
          </div>
          
          <div className="package">
            <h3>Lunch Packages</h3>
            <p>Sandwich platters, salads, and our signature dishes perfect for midday gatherings.</p>
          </div>
          
          <div className="package">
            <h3>Full-Service Events</h3>
            <p>Complete catering service with staff, custom menus, and beverage options.</p>
          </div>
        </div>
      </section>

      <section className="catering-contact">
        <h2>Request Catering Information</h2>
        <p>Contact us to discuss how we can make your event memorable.</p>
        <button className="contact-btn">Contact Us About Catering</button>
      </section>
    </div>
  );
};

export default Catering;