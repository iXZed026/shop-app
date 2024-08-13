import React, { useContext, useState } from 'react';
import "./MoreInfo.css";
import Form from '../../Header/Form';
import { AddProductsContext } from '../../context/AddProductProvider';
import { SetAddProductsContext } from '../../context/AddProductProvider';
import { RiCloseLargeLine } from "react-icons/ri";
import { NameContext } from '../../context/FullNameProvider';
import { SetNameContext } from '../../context/FullNameProvider';

const MoreInfo = (props) => {

    const { pName, pImage, info, price } = props.moreInfo;

    const [showForm, setShowForm] = useState(false)

    const name = useContext(NameContext);
    const setName = useContext(SetNameContext);
    /////////
    const addProducts = useContext(AddProductsContext);
    const setAddProducts = useContext(SetAddProductsContext);

    const closeMoreInfoComponent = () => {
        props.setMoreInfo(null)
    }

    const addToCart = () => {
        if (name !== "ورود / ثبت نام") {
            closeMoreInfoComponent();
            setAddProducts(prevProduct => [...prevProduct, props.moreInfo])
            
        } else {
            setShowForm(true)
        }
    }

    return (
        <>
            <div className="more-info">
                <div className="more-info-container">
                    <RiCloseLargeLine onClick={closeMoreInfoComponent} />
                    <h4 id="more-info-title">{pName}</h4>
                    <div id="line"></div>
                    <div className="more-info-flex">
                        <div className="more-info-image">
                            <img src={pImage} alt="" />
                        </div>
                        <div className="more-info-features">
                            ویژگی ها:
                            <h5>{info}</h5>
                        </div>
                        <div className="more-info-add-to-cart">
                            <div className="shop-info">
                                <h5>فروشنده فن اوران اینده</h5>
                                <p>ضمانت اصالت همراه با کد فعالسازی ارسال از انبار تهران    </p>
                                <h3>{price.toLocaleString("FA-IR")} تومان </h3>
                            </div>
                            <button onClick={addToCart}>افزودن به سبد خرید</button>
                        </div>
                    </div>
                </div>
            </div>
            {showForm && (
                <Form onCloseForm={()=>setShowForm(false)} setName={setName}/>
            )}
        </>
    )
}

export default MoreInfo


//