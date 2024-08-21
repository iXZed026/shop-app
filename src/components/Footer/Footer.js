import React from 'react';
import "./Footer.css";
import FooterHeading from './FooterHeading';
import FooterBody from './FooterBody';



const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-flex">
                    <FooterHeading />
                    <FooterBody />
                </div>
            </div>
        </footer>
    )
}

export default Footer