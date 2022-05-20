import {addItemToCart, removeItemFromCart} from "./utils";

const cartReducer = (state,action) => {
    switch (action.type) {
        case 'ADD_ITEM' : {
            return addItemToCart(state,action.payload);
        }

        case 'REMOVE_ITEM': {
            return removeItemFromCart(state,action.payload);
        }

        case 'CLEAR_ITEM' : {
            return state.filter(item=>item.id !== action.payload);
        }

        case 'CLEAR_CART': {
            return [];
        }
    }
}

export default cartReducer;