import React, { useState, useEffect } from 'react';
import "./NewProducts.css";
import NewProduct from './NewProduct';
import { products } from '../../data/ProductsData';

const NewProducts = () => {

    const [newProducts, setNewProducts] = useState([]);

    const newProductOpration = ()=>{
        const getMonth = new Date().getMonth();

        let findNewProduct = products.filter(product => {
            const pDate = product.productionDate
            if (pDate.year === 2024) {
                return pDate.month === getMonth;
            }
        });

        const randomProduct = products.slice(-4)
        if (!findNewProduct == []) {
            setNewProducts(randomProduct);
        } else {
            setNewProducts(findNewProduct)

        }
    }

    useEffect(()=>{
        newProductOpration();

    },[])   

    

    return (
        <div className="new-products">
            <div className="new-products-container">
                <div className="new-products-flex">
                    <div className="new-products-banner">
                        <h3>جدیدترین محصولات</h3>
                        <img src="../../images/amazingShop.webp" alt="" />
                    </div>
                    <div className="new-products-box">
                        {newProducts.map((product, key) => <NewProduct {...product} key={key}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProducts