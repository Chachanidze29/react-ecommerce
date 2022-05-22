import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import {useCart, useLoading, useProducts} from "../utils/StoreProvider";
import {addProduct} from "../reducers/cart/cartActions";
import CustomButton from "../components/CustomButton";

const Products = () => {
    const {cartDispatch} = useCart();
    const {isLoading} = useLoading();
    const {productItems} = useProducts();

    return (
        <div className='flex max-w-screen-2xl mt-0 mb-0 ml-auto mr-auto flex-col flex-wrap items-center w-full'>
            {
                isLoading ?
                    <Loader/>
                    :
                    productItems.map((product) =>
                        <div key={product.id} className='flex flex-row items-center justify-between mt-10 w-3/4 items-start'>
                            <Link className='basis-3/4' to={`/products/${product.id}`}>
                                <Product key={product.id} product={product} />
                            </Link>
                            <CustomButton clickHandler={() => cartDispatch(addProduct(product))}>
                                Add to Cart
                            </CustomButton>
                        </div>
                    )
            }
        </div>
    )
}

export default Products