import {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {CartReducerDispatcher} from "../contexts/cartContext";

import Loader from '../components/Loader'
import {useParams} from "react-router-dom";

const Product = ({})=> {
    const [loading,setLoading] = useState(false);
    const [product,setProduct] = useState({});
    const {productId} = useParams();
    const dispatch = useContext(CartReducerDispatcher);

    const getData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
    }

    useEffect(()=>{
        setLoading(true);

        getData().catch((err) => {
            console.log(err)
            setLoading(false);
        })
    },[]);

    return(
        <div className='flex flex-col items-center w-full h-screen'>
            {
                loading ? <Loader/>
                    :
                    (
                        <div className='flex flex-col items-center w-1/2 mt-20'>
                            <h1>{product.title}</h1>
                            <img src={product.image} className='w-40 h-40' />
                            <p className='mt-4'>{product.description}</p>
                            <div className='flex justify-between w-full mt-6'>
                                <p>Rating: {product?.rating?.rate}</p>
                                <p>Price: ${product?.price}</p>
                            </div>
                            <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                                    onClick={() => dispatch({
                                        type:'add_item',
                                        payload:product
                                    })}>Add to Cart</button>
                        </div>
                    )
            }
        </div>
    )
}

export default Product;