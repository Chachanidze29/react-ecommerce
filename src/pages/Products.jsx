import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import {useCart, useLoading, useProducts} from "../utils/StoreProvider";
import {addProduct} from "../reducers/cart/cartActions";

const Products = () => {
    const {cartDispatch} = useCart();
    const {productItems} = useProducts();
    const {isLoading} = useLoading();

    return (
        <div className='flex flex-col flex-wrap items-center w-full'>
            {
                isLoading ?
                    <Loader/>
                    :
                    productItems.map((product) =>
                        <div key={product.id} className='flex flex-col w-1/2'>
                            <Link to={`/products/${product.id}`}>
                                <Product key={product.id} product={product} />
                            </Link>
                            <button className='bg-blue-400 w-40 p-2 mt-4 ml-10 text-white'
                                    onClick={() => cartDispatch(addProduct(product))}
                            >Add to Cart
                            </button>
                        </div>
                    )
            }
        </div>
    )
}

export default Products