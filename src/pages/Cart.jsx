import Product from '../components/Product'
import {useCart} from "../utils/StoreProvider";
import {addProduct, clearCart, clearItem, removeItem} from "../reducers/cart/cartActions";
import CustomButton from "../components/CustomButton";

const Cart = () => {
    const {cartItems,cartDispatch} = useCart();

    return (
        <div className='flex flex-col flex-wrap items-center w-full'>
            {
                cartItems.length > 0 &&
                <CustomButton clickHandler={()=>cartDispatch(clearCart())}>
                    Clear List
                </CustomButton>
            }
            {
                cartItems.length === 0 ?
                <p className='mt-10'>Cart is empty</p>
                :
                cartItems.map((product) => (
                        <div key={product.id} className='w-1/2'>
                            <Product key={product.id} product={product} />
                            <div className='flex justify-between'>
                                <CustomButton clickHandler={() => cartDispatch(addProduct(product))}>
                                    Add to Cart
                                </CustomButton>
                                <CustomButton clickHandler={() => cartDispatch(removeItem(product.id))}>
                                    Remove from cart
                                </CustomButton>
                                <CustomButton clickHandler={() => cartDispatch(clearItem(product.id))}>
                                    Clear Item
                                </CustomButton>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Cart