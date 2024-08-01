import React, { useState, useEffect } from 'react';
import "./Header.css";
import Brand from '../Brand/Brand';
import Search from './Search';
import Options from './Options';
import Form from './Form';
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

    const [formModal, setFormModal] = useState();
    const [name,setName] = useState("ورود / ثبت نام")

    const openFormModal = (formFlag) => {
        setFormModal(formFlag)
    }


    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-flex">
                        <div className="header-options">
                            <Options title="سبد خرید" logo={<FaShoppingCart />}/>
                            <Options title={name} logo={<FaUser />} onForm={openFormModal} />
                        </div>
                        <div className="header-search">
                            <Search />
                        </div>
                        <div className="header-logo">
                            <Brand />
                        </div>
                    </div>
                </div>
            </header>
            {formModal && (
                <Form onCloseForm={formFlag=> setFormModal(formFlag) } setName={setName}/>
            )}
        </>
    )
}

export default Header