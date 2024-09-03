import React, { useState, createContext , useContext} from 'react';

const ProductsContext = createContext();
const SetProductsContext = createContext();

const ProdductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    return (
        <ProductsContext.Provider value={products}>
            <SetProductsContext.Provider value={setProducts}>
            {children}
            </SetProductsContext.Provider>
        </ProductsContext.Provider>
    )
}

const useProduct = useContext(ProductsContext); 
const useSetProduct = useContext(SetProductsContext); 

export {useProduct,useSetProduct};
export default ProdductsProvider