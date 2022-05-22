import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Products from "./pages/Products";

const App = ()=> (
    <div className="flex flex-col">
        <Header />
        <Routes>
            <Route path='/' exact
                   element={<Products/>}/>
            <Route path='/products/:productId' exact element={<Product/>}/>
            <Route path='/cart' exact element={<Cart/>}/>
        </Routes>
    </div>
)

export default App
