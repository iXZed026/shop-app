import React from 'react';
import "./Product.css";
import { products } from '../../data/ProductsData';

const Product = (props) => {

  const { pName, price, pImage } = props;




  const newPrice = (price) => {
    
    return price.toLocaleString("FA-IR");


  }




  return (
    <div className="product">
      <div className="product-container">
        <div className="product-body">
          <h3>{pName}</h3>
          <p id="product-price">{newPrice(price)} تومان </p>
        </div>
        <div className="product-image">
          <img src={pImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Product