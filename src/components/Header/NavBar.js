import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" id='nav-link'><IoHomeSharp />خانه</Link>
                </li>
                <li>
                    <Link to="" id='nav-link'><MdPrivacyTip/>راهنما و مقررات</Link>
                </li>
                <li>
                    <Link to="" id='nav-link'><IoCall/>تماس با ما</Link>
                </li>
                <li>
                    <Link to="" id='nav-link'><FaCircleInfo/>درباره ما</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar