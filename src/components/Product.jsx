import React from 'react'

const Product = ({ product }) => {

    return (
        <div className='flex items-center px-2 py-4 m-2 rounded-lg cursor-pointer'>
            <img src={product.image} className='w-40 h-40 rounded-lg' alt='Product Photo' />
            <div className='flex flex-col justify-between w-full ml-10'>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <p>Quantity:{product.quantity}</p>
                <p>Total Price:${Math.round(product.price*product.quantity)}</p>
            </div>
        </div>
    )
}

export default Product