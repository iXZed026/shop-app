import React from 'react';
import "./Home.css";
import AdsCarousel from './AdsCarousel';
import Products from './Products/Products';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-flex">
          <AdsCarousel/>
          <Products/>  
        </div>
      </div>
    </div>
  )
}

export default Home