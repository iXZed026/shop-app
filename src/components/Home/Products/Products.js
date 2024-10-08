import React, { useState, useContext } from 'react';
import "./Products.css";
import Product from './Product';
import { products as productsComp } from '../../data/ProductsData';
import MoreInfo from './MoreInfo';
import { ScrollContext } from '../../context/ScrollProvider';
import { ProductsContext, SetProductsContext } from '../../context/ProductsProvider';



const Products = () => {

  const scrollRef = useContext(ScrollContext);
  const products = useContext(ProductsContext);
  const setProducts = useContext(SetProductsContext);


  // const [products, setProducts] = useState(productsComp);
  const [moreInfo, setMoreInfo] = useState();

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

  const getProductItem = (item) => {
    setMoreInfo(item);
  }

  return (
    <>
      {!moreInfo ? (
        <div className="products" ref={scrollRef}>
          <div className="products-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.3% 1%" }}>
              <h3>محصولات</h3>
              <select name="" id="products-filter" onClick={prodcutFiltering}>
                <option id='product-filter-item' value="all">همه</option>
                <option id='product-filter-item' value="mobile">موبایل</option>
                <option id='product-filter-item' value="laptop">لپ تاب</option>
                <option id='product-filter-item' value="tablet">تبلت</option>
                <option id='product-filter-item' value="new">جدید ترین</option>
              </select>
            </div>
            <div id="line"></div>
            <div className="products-flex">
              {products.map((product, key) => <Product {...product} key={key} onProduct={getProductItem} />)}
            </div>
          </div>
        </div>
      ) : (
        <MoreInfo moreInfo={moreInfo} setMoreInfo={setMoreInfo} />
      )}
    </>
  )
}

export default Products