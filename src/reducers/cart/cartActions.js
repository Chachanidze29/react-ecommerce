import CART_ACTION_TYPE from "./cartActionTypes";

export const addProduct = product => ({
    type:CART_ACTION_TYPE.ADD_ITEM,
    payload:product
});

export const removeItem = productId => ({
    type:CART_ACTION_TYPE.REMOVE_ITEM,
    payload:productId
});

export const clearItem = productId => ({
    type:CART_ACTION_TYPE.CLEAR_ITEM,
    payload:productId
});

export const clearCart = () => ({
    type:CART_ACTION_TYPE.CLEAR_CART
});