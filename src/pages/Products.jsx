import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import Product from '../components/Product'
import Loader from '../components/Loader'
import {CartReducerDispatcher} from "../contexts/cartContext";

const Products = ({ products, loading }) => {
    const dispatch = useContext(CartReducerDispatcher);

    return (
        <div className='flex flex-col flex-wrap items-center w-full'>
            {
                loading ?
                    <Loader/>
                    :
                    products.map((product) =>
                        <div key={product.id} className='flex flex-col w-1/2'>
                            <Link to={`/products/${product.id}`}>
                                <Product key={product.id} product={product} />
                            </Link>
                            <button className='bg-blue-400 justify-center p-2 mt-4 ml-10 text-white'
                                    onClick={() => dispatch({
                                        type:'add_item',
                                        payload:product
                                    })}
                            >Add to Cart
                            </button>
                        </div>
                    )
            }
        </div>
    )
}

export default Products