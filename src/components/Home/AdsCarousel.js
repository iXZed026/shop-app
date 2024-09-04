import React, { useEffect, useState } from 'react';
import "./AdsCarousel.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const AdsCarousel = () => {

    const carouselImg = ["../../images/carouselAds6.webp","../../images/carouselAds1.gif", "../../images/carouselAds2.gif", "../../images/carouselAds3.gif", "../../images/carouselAds4.webp", "../../images/carouselAds5.webp"];
    let [counter, setCounter] = useState(0);

    const nextImgHandler = () => {

        // setCounter((prevCounter) => (prevCounter + 1) % carouselImg.length);
        if (counter === carouselImg.length - 1) {
            setCounter(counter = 0)
        } else {
            setCounter(counter += 1)
        }


    }

    const prevImgHandler = () => {
        if (counter === 0) {
            setCounter(carouselImg.length - 1)
        } else {
            setCounter(counter -= 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(nextImgHandler, 5000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div className="ads-carousel">
            <div className="ads-carousel-container">
                <div className="ads-carousel-flex">
                    <div className="carousel">
                        <img src={carouselImg[counter]} alt="" />
                        <GrFormNext id='next' onClick={nextImgHandler} />
                        <GrFormPrevious id='previous' onClick={prevImgHandler} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdsCarousel