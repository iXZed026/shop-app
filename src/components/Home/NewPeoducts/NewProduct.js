import React from 'react'

const NewProduct = (props) => {

    const { pImage, pName, basePrice } = props;

    return (
        <div className="new-product">
            <div className="new-product-contianer">
                <div className="new-product-flex">
                    <div className='.new-product-image'>
                        <img src={pImage} alt="" />
                    </div>
                    <h4>{pName}</h4>
                    <span>{basePrice}</span>
                </div>
            </div>
        </div>
    )
}

export default NewProduct