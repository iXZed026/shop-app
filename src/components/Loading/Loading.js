import React from 'react';
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading-container">
                <div className="loading-flex">
                <div className="spinner"></div><br />
                <h3>لطفا صبر کنید...</h3>
                </div>
            </div>
        </div>
    )
}

export default Loading