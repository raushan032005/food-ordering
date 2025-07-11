import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import FoodCard from '../../components/FoodCard/FoodCard';
import { foodItems } from '../../data/foodData';
import './Menu.css';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const search = urlParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [location]);

  const filteredItems = foodItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="menu-page">
      <div className="container">
        <div className="menu-header">
          <h1 className="page-title">Our Menu</h1>
          <p className="page-subtitle">
            Explore our delicious selection of freshly prepared meals
          </p>
        </div>

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {searchTerm && (
          <div className="search-info">
            <p>Showing results for: "<strong>{searchTerm}</strong>"</p>
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </button>
          </div>
        )}

        <div className="food-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))
          ) : (
            <div className="no-results">
              <p>No items found matching your criteria.</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
              >
                Show All Items
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;