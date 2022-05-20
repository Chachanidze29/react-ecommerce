import {createContext} from "react";

const ProductsContext = createContext({
    productItems:[],
    productDispatch:()=>{}
});

export default ProductsContext;