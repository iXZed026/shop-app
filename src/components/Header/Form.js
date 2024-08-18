import React, { useState } from 'react';
import "./Form.css";
import { IoIosClose } from "react-icons/io";
import Inputs from './Inputs';

const Form = ({ onCloseForm, setName }) => {

    const [formValues, setFormValues] = useState({
        fullName: "",
        password: "",
    });

    const [fullNameError, setFullNameError] = useState("");
    const [passwordError, setPasswprdError] = useState("");

    const [loginFlag, setLoginFlag] = useState(false);

    const formSubmit = (e) => {

        e.preventDefault();
        const { fullName, password } = formValues;


        if (fullName.trim().length <= 1) {
            setFullNameError("لطفا نام خود را وارد کنید.")
        } else {
            setFullNameError("");
        }
        if (password.trim().length < 8) {
            setPasswprdError("رمز باید حداقل شامل 8 کاراکتر باشد.")
        } else {
            setPasswprdError("");
        }

        if (fullName.trim().length >= 1 && password.trim().length >= 8) {
            setLoginFlag(true)
            setName(fullName)
            closeFormModal()
        }

    }

    const closeFormModal = () => {
        if (onCloseForm) {
            onCloseForm(false)
        }
    }


    return (
        <div className="form">
            <div className="form-container">
                <div className="form-flex">
                    <form action="" onSubmit={formSubmit}>
                        <IoIosClose onClick={closeFormModal} /><br />
                        <div className="form-logo">
                            <img src="../../images/logo.svg" alt="" />
                        </div>
                        <h2>ورود | ثبت نام</h2>
                        <p id='p-info'>سلام!</p>
                        <p id='p-info'>لطفا اطلاعات خواسته شده را وارد نمایید.</p>
                        <div className="form-body">
                            <Inputs
                                fullName={formValues.fullName}
                                formValues={formValues}
                                setFormValues={setFormValues}
                                place={`نام و نام خانوادگی`}
                                fullNameError={fullNameError}
                            />

                            <Inputs
                                password={formValues.password}
                                formValues={formValues}
                                setFormValues={setFormValues}
                                place={`رمز عبور`}
                                passwordError={passwordError}
                            />
                        </div>
                        <div className="form-footer">
                            <button>ادامه</button>
                            <p>ورود شما به معنای پذیرش <span>شرایط دیجی‌کالاوقوانین حریم‌خصوصی</span> است</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Form)