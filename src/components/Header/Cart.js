import React, { useContext } from 'react';
import "./Cart.css";
import { AddProductsContext } from '../context/AddProductProvider';
import { SetAddProductsContext } from '../context/AddProductProvider';
import { FaCartPlus } from "react-icons/fa6";

const Cart = () => {

    const addProducts = useContext(AddProductsContext);
    const setAddProducts = useContext(SetAddProductsContext);


    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-flex">
                    {addProducts.length === 0 ? (
                        <>
                            <h2>جزئیات سبد خرید</h2>
                            <div id='line'></div>
                            <div className='empty-cart-body'>
                                <FaCartPlus id='cart-icon'/>
                                <span>کالایی در سبد خزید شما وجود ندارد</span>
                            </div>
                        </>

                    ) : (
                        <h1>d</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart