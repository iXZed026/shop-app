import React, { useState } from 'react';
import "./Options.css";

const Options = (props) => {

    const { title, logo, onForm, onCart } = props;


    //check component name
    const optionDivHandler = () => {
        if (title === "ورود / ثبت نام") {
            openFormModal();
        } else {
            openFormModal()
        }


    }


    const openFormModal = () => {
        if (onForm) {
            onForm(true);
        }
    }



    return (
        <div id='logo-flex' onClick={optionDivHandler}>
            <span>{logo}</span>
            <span >{title}</span>
        </div>
    )
}

export default React.memo(Options);