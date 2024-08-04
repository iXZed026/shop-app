import React, { useState, useEffect } from 'react';
import "./Header.css";
import Brand from '../Brand/Brand';
import Search from './Search';
import Options from './Options';
import NavBar from './NavBar';
import Form from './Form';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

    const [formModal, setFormModal] = useState();
    const [name, setName] = useState("ورود / ثبت نام")

    const openFormModal = (formFlag) => {
        setFormModal(formFlag)
    }

    const openCartPage = (cartFlag) => {
        return "s"
    }


    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-flex">
                        <div className="header-options">
                            <Link to="/Cart"><Options title="سبد خرید" logo={<FaShoppingCart />} /></Link>
                            <Options title={name} logo={<FaUser />} onForm={openFormModal} />
                        </div>
                        <div className="header-search">
                            <Search />
                        </div>
                        <div className="header-logo">
                            <Brand />
                        </div>
                    </div>
                    <NavBar />
                </div>
            </header>
            {formModal && (
                <Form onCloseForm={formFlag => setFormModal(formFlag)} setName={setName} />
            )}
        </>
    )
}

export default Header