import React from 'react';
import "./Inputs.css";

const Inputs = (props) => {

    const { fullName, password, place, formValues, setFormValues ,fullNameError,passwordError} = props;

    const setValuesHandler = (e) => {
        if (place === "نام و نام خانوادگی") {
            setFormValues({ ...formValues, fullName: e.target.value })
        } else {
            setFormValues({ ...formValues, password: e.target.value })
        }
    }

    return (
        <>
            <input
                type={place === "نام و نام خانوادگی" ? "text" : place === "رمز عبور" && "password"}
                value={place === "نام و نام خانوادگی" ? fullName : place === "رمز عبور" && password}
                onChange={setValuesHandler}
                placeholder={place === "نام و نام خانوادگی" ? place : place}
                maxLength={20}
            />
            <span id="input-error">{place === "نام و نام خانوادگی" ? fullNameError : passwordError}</span> 
            </>
            )
}

            export default Inputs