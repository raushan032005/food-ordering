import React from 'react';
import { whyCraveMania } from '../../data/foodData';
import './WhyCraveMania.css';

const WhyCraveMania = () => {
  return (
    <section className="why-section">
      <div className="container">
        <h2 className="section-title">Why Choose CraveMania?</h2>
        <p className="section-subtitle">
          We are committed to providing you with the best food delivery experience
        </p>
        
        <div className="why-grid">
          {whyCraveMania.map((item) => (
            <div key={item.id} className="why-card">
              <div className="why-icon">
                <span>{item.icon}</span>
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCraveMania;