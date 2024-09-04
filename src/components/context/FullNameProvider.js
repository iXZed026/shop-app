import React, { useState,createContext } from 'react';

const NameContext=createContext();
const SetNameContext=createContext();

const FullNameProvider = ({children}) => {

const [name,setName] = useState("ورود / ثبت نام")

    return (
        <NameContext.Provider value={name}>
            <SetNameContext.Provider value={setName}>
                {children}
            </SetNameContext.Provider>
        </NameContext.Provider>
    )
}

export  {NameContext,SetNameContext}
export default FullNameProvider