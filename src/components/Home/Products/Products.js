import React, { useState } from 'react';
import "./Products.css";
import Product from './Product';
import { products as productsComp } from '../../data/ProductsData';

const Products = () => {

  const [products, setProducts] = useState(productsComp);

  const prodcutFiltering = (e) => {

    let filterProduct = productsComp.filter(product => {
      return product.pType == e.target.value;
    });

    if (e.target.value === "all") {
      setProducts(productsComp);
    } else {
      setProducts(filterProduct)
    }

  }

  return (
    <div className="products">
      <div className="products-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.3% 1%" }}>
          <h3>محصولات</h3>
          <select name="" id="products-filter" onClick={prodcutFiltering}>
            <option value="all">همه</option>
            <option value="mobile">موبایل</option>
            <option value="laptop">لپ تاب</option>
            <option value="tablet">تبلت</option>
            <option value="new">جدید ترین</option>
          </select>
        </div>
        <div id="line"></div>
        <div className="products-flex">
          {products.map((product, key) => <Product {...product} key={key} />)}
        </div>
      </div>
    </div>
  )
}

export default Products