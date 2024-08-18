import React from 'react';
import "./Buy.css";
import { FaRegCircleCheck } from "react-icons/fa6";

const Buy = () => {
    return (
        <div className="buy">
            <div className="buy-container">
                <div className="buy-flex">
                    <div className="buy-body">
                        <FaRegCircleCheck />
                        <span>خرید با موفقیت انجام شد.</span>
                    </div>
                    <div id="buy-line">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy