import React, { useState } from 'react';
import "./Options.css";

const Options = (props) => {

    const { title, logo, onForm } = props;


    //check component name
    const optionDivHandler = () => {
        if (props.title === "ورود / ثبت نام") {
            openFormModal();
        } else {
            openFormModal()
        }
    }


    const openFormModal = () => {
        onForm(true);
    }

    console.log("oprions");

    return (
        <div id='logo-flex' onClick={optionDivHandler}>
            <span>{logo}</span>
            <span >{title}</span>
        </div>
    )
}

export default React.memo(Options);