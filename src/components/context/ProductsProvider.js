import React, { useState, createContext , useContext} from 'react';
import { products as productsComp} from '../data/ProductsData';

const ProductsContext = createContext();
const SetProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState(productsComp);

    return (
        <ProductsContext.Provider value={products}>
            <SetProductsContext.Provider value={setProducts}>
            {children}
            </SetProductsContext.Provider>
        </ProductsContext.Provider>
    )
}



export {ProductsContext,SetProductsContext};
export default ProductsProvider