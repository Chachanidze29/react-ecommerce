import Product from '../components/Product'
import {useContext} from "react";
import {CartReducerDispatcher} from "../contexts/cartContext";

const Cart = ({ products }) => {
    const dispatch = useContext(CartReducerDispatcher);

    return (
        <div className='flex flex-col flex-wrap items-center w-full'>
            {
                products.length === 0 ?
                <p className='mt-10'>Cart is empty</p>
                :
                products.map((product) => {
                        return (
                            <div key={product.id} className='w-1/2'>
                                <Product key={product.id} product={product} />
                                <div className='flex justify-between'>
                                    <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                                            onClick={() => dispatch({
                                                type:'add_item',
                                                payload:product
                                            })}>Add to Cart
                                    </button>
                                    <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                                            onClick={() => dispatch({
                                                type:'remove_item',
                                                payload:product
                                            })}>Remove from cart
                                    </button>
                                    <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                                            onClick={() => dispatch({
                                                type:'clear_item',
                                                payload:product
                                            })}>Clear Item
                                    </button>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Cart