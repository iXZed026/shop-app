import React, { useContext } from 'react';
import "./Product.css";
import { products as productComp } from '../../data/ProductsData';
import { SetAddProductsContext } from '../../context/AddProductProvider';
import { Link } from 'react-router-dom';

const Product = (props) => {

  const { id, pName, price, pImage, onProduct } = props;

  const newPrice = (price) => {
    return price.toLocaleString("FA-IR");
  }

  const sendProductItem = ()=>{
    onProduct(props)
  }

  return (
    <div className="product" onClick={sendProductItem}>
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