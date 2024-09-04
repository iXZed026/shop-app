import React from 'react';
import "./Contact.css";
import Map from './Map';
import Address from './Address';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-flex">
                    <Address />
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Contact