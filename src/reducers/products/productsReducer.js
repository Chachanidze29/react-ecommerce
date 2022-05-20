const productsReducer = (state,action) => {
    switch (action.type) {
        case 'INITIALIZE': {
            return [...action.payload];
        }
    }
}

export default productsReducer;