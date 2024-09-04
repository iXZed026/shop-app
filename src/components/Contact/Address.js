import React from 'react';
import "./Address.css";

const Address = () => {

    const contactMe = ["09044290000","09309000000","09044550000","danyal.titanka24@gmail.com"];

    return (
        <div className="address">
            <div className="address-header">
                <h1>ادرس</h1>
                <div id="line"></div>
            </div>
            <div className="address-body">
                <p>كرمان - خيابان فردوسی، نبش خیابان وحشی بافقی، ساختمان آل‌دیجیتال، دپارتمان سایت اینترنتی آل‌دیجیتال
                    کدپستی 76137***4</p>
            </div>
            <div className="suport-header">
            <h1>مرکز پشتیبانی</h1>
            <div id="line"></div>
            </div>
            <div className="suport-body">
                <h2>تلفن و ایمیل</h2>
                {contactMe.map((contact,key)=> <p key={key}>{contact}</p>)}
            </div>
        </div>
    )
}

export default Address