import {addItemToCart, removeItemFromCart} from "./utils";

const cartReducer = (state,action) => {
    switch (action.type) {
        case 'add_item' : {
            return addItemToCart(state,action.payload);
        }

        case 'remove_item': {
            return removeItemFromCart(state,action.payload);
        }

        case 'clear_item' : {
            return state.filter(item=>item.id !== action.payload.id);
        }

        case 'clear_cart': {
            return [];
        }
    }
}

export default cartReducer;