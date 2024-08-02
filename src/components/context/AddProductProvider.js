import React, { useState, createContext } from 'react';

const AddProductsContext = createContext();
const SetAddProductsContext = createContext();

const AddProductProvider = ({ children }) => {

    const [addProducts, setAddProduct] = useState([]);

    return (
        <AddProductsContext.Provider value={addProducts}>
            <SetAddProductsContext.Provider value={setAddProduct}>
                {children}
            </SetAddProductsContext.Provider>
        </AddProductsContext.Provider>
    )
}

export {AddProductProvider,AddProductsContext,SetAddProductsContext};