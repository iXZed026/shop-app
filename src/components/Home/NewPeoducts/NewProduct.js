import React from 'react';
import "./NewProduct.css"

const NewProduct = (props) => {

    const { pImage, pName, basePrice } = props;

    console.log("render")

    return (
        <div className="new-product">
            <div className="new-product-contianer">
                <div className="new-product-flex">
                    <div className='new-product-image'>
                        <img src={pImage} alt="" />
                    </div>
                    <h4>{pName}</h4>
                    <span>{basePrice.toLocaleString()} تومان </span>
                </div>
            </div>
        </div>
    )
}

export default NewProduct