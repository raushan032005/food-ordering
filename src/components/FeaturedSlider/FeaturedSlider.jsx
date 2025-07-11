import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FoodCard from '../FoodCard/FoodCard';
import { foodItems } from '../../data/foodData';
import './FeaturedSlider.css';

const FeaturedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredItems = foodItems.filter(item => item.featured);
  const itemsPerView = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= featuredItems.length - itemsPerView ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= featuredItems.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? featuredItems.length - itemsPerView : prev - 1
    );
  };

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">Featured Items</h2>
        <p className="section-subtitle">
          Discover our most popular dishes that keep customers coming back for more
        </p>
        
        <div className="slider-container">
          <button className="slider-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {featuredItems.map((item) => (
                <div key={item.id} className="slider-item">
                  <FoodCard item={item} />
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="slider-dots">
          {Array.from({ length: featuredItems.length - itemsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;