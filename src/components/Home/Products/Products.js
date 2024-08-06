import React from 'react';
import "./Products.css";
import { product } from '../../data/ProductsData';

const Products = () => {

  console.log(product);
  

  return (
    <div className="products">
        <div className="products-container">
            <h3>محصولات</h3>
            <div id="line"></div>
            <div className="products-flex">
                
            </div>
        </div>
    </div>
  )
}

export default Products