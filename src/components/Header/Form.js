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

        if (fullName && password) {
            setLoginFlag(true)
            setName(fullName)
            closeFormModal()
        }

    }

    const closeFormModal = () => {
        onCloseForm(false)
    }

    console.log("form")

    return (
        <div className="form">
            <div className="form-container">
                <div className="form-flex">
                    <form action="" onSubmit={formSubmit}>
                        <IoIosClose onClick={closeFormModal} />
                        <h2>ثبت نام</h2>
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Form)