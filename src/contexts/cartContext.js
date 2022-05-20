import {createContext} from "react";

const CartContext = createContext({
    cartItems:[],
    cartDispatch:()=>{}
});

export default CartContext;