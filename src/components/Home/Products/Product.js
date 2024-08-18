import React, { useContext } from 'react';
import "./Product.css";
import { products as productComp } from '../../data/ProductsData';
import { SetAddProductsContext } from '../../context/AddProductProvider';
import { Link } from 'react-router-dom';

const Product = (props) => {

  const { id, pName, basePrice, pImage, onProduct } = props;

  const newPrice = (basePrice) => {
    return basePrice.toLocaleString("FA-IR");
  }

  const sendProductItem = ()=>{
    onProduct(props)
  }

  return (
    <div className="product" onClick={sendProductItem}>
      <div className="product-container">
        <div className="product-image">
          <img src={pImage} alt="" />
        </div>
        <div className="product-body">
          <h3>{pName}</h3>
          <p id="product-price">{newPrice(basePrice)} تومان </p>
        </div>
      </div>
    </div>
  )
}

export default Product