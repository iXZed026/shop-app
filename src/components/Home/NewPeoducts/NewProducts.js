import React from 'react';
import "./NewProducts.css";
import NewProduct from './NewProduct';

const NewProducts = () => {
    return (
        <div className="new-products">
            <div className="new-productds-container">
                <div className="new-productds-flex">
                    <div className="new-productds-banner">
                        <h3>جدیدترین محصولات</h3>
                        <img src="../../images/amazingShop.webp" alt="" />
                    </div>
                    <div className="new-products-box">
                        <NewProduct/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProducts