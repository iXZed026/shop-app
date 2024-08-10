import React from 'react';
import "./MoreInfo.css";
import { RiCloseLargeLine } from "react-icons/ri";

const MoreInfo = (props) => {

    const { pName, pImage, info, price } = props.moreInfo

    const closeMoreInfoComponent = ()=>{
       props.setMoreInfo(null)
    }

    return (
        <div className="more-info">
            <div className="more-info-container">
                <RiCloseLargeLine onClick={closeMoreInfoComponent}/>
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
                        <button>افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo