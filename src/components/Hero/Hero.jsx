import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Delicious Food <br />
              <span className="text-primary">Delivered Fast</span>
            </h1>
            <p className="hero-description">
              Experience the finest flavors from our expert chefs, delivered fresh to your doorstep. 
              Order now and satisfy your cravings with CraveMania.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary">
                Order Now
                <ArrowRight size={20} />
              </Link>
              <Link to="/menu" className="btn btn-outline">
                View Menu
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Delicious food" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;