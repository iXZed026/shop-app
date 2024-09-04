import React, { useEffect } from 'react';
import "./SecoundAds.css";

const SecoundAds = () => {

    const adsImg = ["../../images/ads2.gif", "../../images/ads3.gif", "../../images/ads4.gif", "../../images/ads5.gif"];

    return (
        <div className="secound-ads">
            {
                adsImg.map((ads, key) => <img src={ads} alt="" key={key} />)
            }
        </div>
    )
}

export default SecoundAds;