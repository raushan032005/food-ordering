import React from 'react';
import Hero from '../../components/Hero/Hero';
import SearchBar from '../../components/SearchBar/SearchBar';
import FeaturedSlider from '../../components/FeaturedSlider/FeaturedSlider';
import WhyCraveMania from '../../components/WhyCraveMania/WhyCraveMania';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/menu?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div>
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <FeaturedSlider />
      <WhyCraveMania />
    </div>
  );
};

export default Home;