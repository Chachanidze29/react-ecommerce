import Product from '../components/Product'
import {useCart} from "../utils/StoreProvider";
import {addProduct, clearCart, clearItem, removeItem} from "../reducers/cart/cartActions";

const Cart = () => {
    const {cartItems,cartDispatch} = useCart();

    return (
        <div className='flex flex-col flex-wrap items-center w-full'>
            <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28' onClick={()=>cartDispatch(clearCart())}>Clear List</button>
            {
                cartItems.length === 0 ?
                    <p className='mt-10'>Cart is empty</p>
                :
                    cartItems.map((product) => {
                        return (
                            <div key={product.id} className='w-1/2'>
                                <Product key={product.id} product={product} />
                                <div className='flex justify-between'>
                                    <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                                            onClick={() => cartDispatch(addProduct(product))}>Add to Cart
                                    </button>
                                    <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                                            onClick={() => cartDispatch(removeItem(product.id))}>Remove from cart
                                    </button>
                                    <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                                            onClick={() => cartDispatch(clearItem(product.id))}>Clear Item
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