import React from 'react';
import "./Footer.css";
import FooterHeading from './FooterHeading';



const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-flex">
                    <FooterHeading />
                </div>
            </div>
        </footer>
    )
}

export default Footer