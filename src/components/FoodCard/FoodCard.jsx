import React from 'react';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import './FoodCard.css';

const FoodCard = ({ item }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <div className="food-card">
      <div className="food-image">
        <img src={item.image} alt={item.name} />
        <div className="food-rating">
          <Star size={14} fill="currentColor" />
          <span>{item.rating}</span>
        </div>
      </div>
      
      <div className="food-content">
        <h3 className="food-name">{item.name}</h3>
        <p className="food-description">{item.description}</p>
        
        <div className="food-footer">
          <span className="food-price">₹{item.price}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <Plus size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;