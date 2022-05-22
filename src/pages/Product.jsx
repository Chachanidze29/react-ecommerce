import {useEffect, useState} from 'react'
import Loader from '../components/Loader'
import {useParams} from "react-router-dom";
import {useCart, useProducts} from "../utils/StoreProvider";
import {addProduct} from "../reducers/cart/cartActions";
import CustomButton from "../components/CustomButton";

const Product = ()=> {
    const {cartDispatch} = useCart();
    const [loading,setLoading] = useState(true);
    const [product,setProduct] = useState({});
    const {productId} = useParams();
    const {productItems} = useProducts();

    useEffect(()=> {
        setLoading(true);
        const prod = productItems.filter(item => item.id.toString() === productId);
        setProduct(prod[0]);
        setLoading(false);
    },[productId, productItems]);

    return(
        <div className='flex flex-col items-center w-full h-screen'>
            {
                loading ? <Loader/>
                    :
                    (
                        <div className='flex flex-col items-center w-1/2 mt-20'>
                            <h1>{product?.title}</h1>
                            <img src={product?.image} className='w-40 h-40' />
                            <p className='mt-4'>{product?.description}</p>
                            <div className='flex justify-between w-full mt-6'>
                                <p>Rating: {product?.rating?.rate}</p>
                                <p>Price: ${product?.price}</p>
                            </div>
                            <CustomButton clickHandler={() => cartDispatch(addProduct(product))}>
                                Add to Cart
                            </CustomButton>
                        </div>
                    )
            }
        </div>
    )
}

export default Product;