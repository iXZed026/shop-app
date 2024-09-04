import React, { useState, useContext } from 'react';
import "./Cart.css";
import { AddProductsContext } from '../context/AddProductProvider';
import { SetAddProductsContext } from '../context/AddProductProvider';
import { FaCartPlus } from "react-icons/fa6";
import { products } from '../data/ProductsData';
import Buy from './Buy';
import Loading from '../Loading/Loading';

const Cart = () => {

    const addProducts = useContext(AddProductsContext);
    const setAddProducts = useContext(SetAddProductsContext);
    const [buyFlag, setBuyFlag] = useState(false);

    const deleteProductItem = (id) => {
        const deleteItem = addProducts.filter(product => product.id != id)
        setAddProducts(deleteItem)
    }


    const priceOpration = (pr, e) => {
        const { id, basePrice } = pr;
        const counterProudct = Number(e.target.value)

        const updatedProducts = addProducts.map(product => {
            if (product.id === id) {
                return { ...product, price: basePrice * counterProudct };
            }
            return product;

        });
        setAddProducts(updatedProducts);
    }

    const showTotalPrice = () => {
        let totalPrice = 0;
        addProducts.forEach(product => {
            if (!product.price) {
                totalPrice += product.basePrice
            } else {
                totalPrice += product.price
            }
        })

        return totalPrice.toLocaleString("FA-IR");

    }

    const buyOpration = () => {
        setBuyFlag("loading");
        setTimeout(() => {
            setBuyFlag(true);
            setTimeout(()=>{
                setBuyFlag(false);
                setAddProducts([])
            },4000)
        }, 3000)
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
                                    <span>کالایی در سبد خرید شما وجود ندارد</span>
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
                                                            <td style={{ width: "100px", textAlign: "center", fontSize: "13px", fontWeight: "bold" }} >{product.price ? product.price.toLocaleString("FA-IR") : product.basePrice.toLocaleString("FA-IR")} تومان </td>
                                                            <td style={{ width: "80px" }}>
                                                                <select onChange={(e) => { priceOpration(product, e) }}>
                                                                    <option value={1}>1</option>
                                                                    <option value={2}>2</option>
                                                                    <option value={3}>3</option>
                                                                    <option value={4}>4</option>
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
                                <p>کالاهای موجود در سبد خرید تا قبل از ثبت نهایی سفارش برای شما رزرو نشده‌ان</p>
                                <h2 id='total-price'> قیمت کل <span>{showTotalPrice()}</span> تومان </h2>
                                <div className="continue-the-process-button">
                                    <button onClick={buyOpration}>خرید</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}

            {buyFlag == "loading" ? (
                <Loading />
            ) : (
                buyFlag && (
                    <Buy />
                )
            )}

        </>
    )
}

export default Cart