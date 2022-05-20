import {useContext, useEffect, useReducer, useState} from "react";
import productsReducer from "../reducers/products/productsReducer";
import cartReducer from "../reducers/cart/cartReducer";
import {initializeProducts} from "../reducers/products/productsActionTypes";
import ajax from "./services/ajax";
import ProductsContext from "../contexts/productContext";
import CartContext from "../contexts/cartContext";
import LoadingContext from "../contexts/loadingContext";

export const useCart = ()=> useContext(CartContext);
export const useLoading = ()=> useContext(LoadingContext);
export const useProducts = ()=> useContext(ProductsContext);

const StoreProvider = ({children}) => {
    const [products, productsDispatch] = useReducer(productsReducer,[]);
    const [loading, setLoading] = useState(false);
    const [cart, cartDispatch] = useReducer(cartReducer,[]);

    const getData = async () => {
        const response = await ajax.get('/products');
        productsDispatch(initializeProducts(response.data));
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getData().catch((err) => {
            console.log(err)
            setLoading(false);
        })
    }, []);

    return (
        <ProductsContext.Provider value={{productItems: products,productDispatch:productsDispatch}}>
            <CartContext.Provider value={{cartItems: cart,cartDispatch:cartDispatch}}>
                <LoadingContext.Provider value={{isLoading: loading,setIsLoading:setLoading}}>
                    {children}
                </LoadingContext.Provider>
            </CartContext.Provider>
        </ProductsContext.Provider>
    )
}

export default StoreProvider;