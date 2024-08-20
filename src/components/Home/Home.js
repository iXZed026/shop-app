import React from 'react';
import "./Home.css";
import AdsCarousel from './AdsCarousel';
import Products from './Products/Products';
import NewProducts from './NewPeoducts/NewProducts';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-flex">
          <AdsCarousel />
          <NewProducts />
          <Products />
        </div>
      </div>
    </div>
  )
}

export default Home