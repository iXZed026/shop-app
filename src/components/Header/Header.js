import React, { useState, useEffect, useContext } from 'react';
import "./Header.css";
import Brand from '../Brand/Brand';
import Search from './Search';
import Options from './Options';
import NavBar from './NavBar';
import Form from './Form';
import { Link } from 'react-router-dom';
import { TbLogin } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { NameContext } from '../context/FullNameProvider';
import { SetNameContext } from '../context/FullNameProvider';

const Header = () => {

    const name = useContext(NameContext);
    const setName = useContext(SetNameContext);

    const [formModal, setFormModal] = useState();

    const openFormModal = (formFlag) => {
        setFormModal(formFlag)
    }


    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-flex">
                        <div className="header-options">
                            <Options title={name} logo={<TbLogin />} onForm={openFormModal} />
                            <Link to="/Cart"><Options title="سبد خرید" logo={<FaShoppingCart />} /></Link>
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

export default Header;