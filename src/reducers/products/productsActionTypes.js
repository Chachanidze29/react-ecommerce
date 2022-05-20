import PRODUCTS_ACTION_TYPE from "./productsActions";

export const initializeProducts = products => ({
    type:PRODUCTS_ACTION_TYPE.INITIALIZE,
    payload:products
});