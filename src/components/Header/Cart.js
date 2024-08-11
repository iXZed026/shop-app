import React, { useContext } from 'react';
import "./Cart.css";
import { AddProductsContext } from '../context/AddProductProvider';
import { SetAddProductsContext } from '../context/AddProductProvider';
import { FaCartPlus } from "react-icons/fa6";
import { products } from '../data/ProductsData';

const Cart = () => {

    const addProducts = useContext(AddProductsContext);
    const setAddProducts = useContext(SetAddProductsContext);

    const deleteProductItem = (id) => {
        const deleteItem = addProducts.filter(product => product.id != id)
        setAddProducts(deleteItem)
    }

    return (
        <>
            {addProducts.length === 0 ? (
                <div className="cart">
                    <div className="cart-container">
                        <div className="cart-flex">
                            <>
                                <h2>جزئیات سبد خرید</h2>
                                <div id='line'></div>
                                <div className='empty-cart-body'>
                                    <FaCartPlus id='cart-icon' />
                                    <span>کالایی در سبد خزید شما وجود ندارد</span>
                                </div>
                            </>

                        </div>
                    </div>
                </div>
            ) : (
                <div className="cart-item">
                    <div className="cart-item-container">
                        <div className="cart-item-flex">
                            <div className="item" style={{ overflowY: addProducts.length > 2 ? "scroll" : "" }}>
                                <div className="item-container">
                                    <h3>جزئیات سبد خرید</h3>
                                    <div id="line"></div>
                                    <div className="item-flex" >
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>کالا</th>
                                                    <th></th>
                                                    <th>قیمت</th>
                                                    <th>تعداد</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            {addProducts.length > 0 && (
                                                addProducts.map((product, key) => (
                                                    <tbody key={key} >
                                                        <tr>
                                                            <td style={{ width: "100px" }}><img src={product.pImage} alt="" /></td>
                                                            <td style={{ width: "170px", color: "var(--main-color)", fontSize: "14px", fontWeight: "bold" }}>{product.pName}</td>
                                                            <td style={{ width: "100px", textAlign: "center", fontSize: "12px", fontWeight: "bold" }}>{product.price.toLocaleString("FA-IR")} تومان </td>
                                                            <td style={{ width: "80px" }}>
                                                                <select>
                                                                    <option value={1}>1</option>
                                                                    <option value={2}>2</option>
                                                                </select>
                                                            </td>
                                                            <td style={{ width: "60px", color: "red", fontWeight: "bold", textAlign: "center" }}><span style={{ cursor: "pointer" }} onClick={() => deleteProductItem(product.id)}>حذف</span></td>
                                                    </tr>
                                                    </tbody>
                                        ))
                                            )}
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="continue-the-process">
                            <h3>ادامه فرایند</h3>
                            <div id="line"></div>
                            <p>هزینه ارسال در ادامه بر اساس آدرس و قیمت فاکتور شما محاسبه میشود.</p>
                            <p>کالاهای موجود در سبد خرید تا قبل از ثبت نهایی سفارش برای شما رزرو نشده‌ان</p><br />
                            <div className="continue-the-process-button">
                                <button>ادامه فرایند خرید</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div >
            )}
        </>
    )
}

export default Cart