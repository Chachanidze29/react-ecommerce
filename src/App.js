import React, {useEffect, useReducer, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Product from './pages/Product'
import cartReducer from "./reducers/cartReducer";
import {CartContext,CartReducerDispatcher} from "./contexts/cartContext";

const App = ()=> {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, dispatch] = useReducer(cartReducer,[]);

    const getData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data);
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
        <CartReducerDispatcher.Provider value={dispatch}>
            <CartContext.Provider value={cart}>
                <div className="flex flex-col">
                    <Header itemCount={cart.reduce((accumulatedTotal, cartItem) => accumulatedTotal + cartItem.quantity, 0)}/>
                    <Routes>
                        <Route path='/' exact
                               element={<Products products={products}
                                                  loading={loading}/>}/>
                        <Route path='/products/:productId' exact element={<Product/>}/>
                        <Route path='/cart' exact element={<Cart products={cart}/>}/>
                    </Routes>
                </div>
            </CartContext.Provider>
        </CartReducerDispatcher.Provider>
    )
}

export default App
