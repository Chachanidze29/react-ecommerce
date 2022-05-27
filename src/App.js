import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Suspense} from "react";
import Header from './components/Header'
import Loader from "./components/Loader";

const Product = React.lazy(()=>import('./pages/Product'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Products = React.lazy(()=>import("./pages/Products"));

const App = ()=> (
    <Suspense fallback={<Loader/>}>
        <div className="flex flex-col">
            <Header />
            <Routes>
                <Route path='/' exact
                       element={<Products/>}/>
                <Route path='/products/:productId' exact element={<Product/>}/>
                <Route path='/cart' exact element={<Cart/>}/>
            </Routes>
        </div>
    </Suspense>
)

export default App
