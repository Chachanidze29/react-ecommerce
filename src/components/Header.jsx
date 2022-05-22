import { Link } from 'react-router-dom'
import {useCart} from "../utils/StoreProvider";

const Header = () => {
    const {cartItems} = useCart();
    return (
        <div className='sticky top-0 z-10 flex items-center justify-between bg-slate-700 h-14 px-10'>
            <Link to='/' className='text-white cursor-pointer'>
                Ecommerce
            </Link>
            <Link to='/cart' className='text-white text-xl cursor-pointer'>
                Cart{cartItems.length > 0 && `(${cartItems.reduce((prev,curr)=>prev+curr.quantity,0)})`}
            </Link>
        </div>
    )
}

export default Header;