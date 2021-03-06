import React from 'react'

const Product = ({ product }) => (
    <div className='flex items-center px-2 py-4 m-2 rounded-lg cursor-pointer'>
        <img src={product.image} className='w-40 h-40 rounded-lg' alt='Product Photo' />
        <div className='flex flex-col justify-between w-full ml-10'>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            {
                product?.quantity > 0 && <p>Quantity:{product.quantity}</p>
            }
            {
                !isNaN(Math.round(product.price*product.quantity)) && <p>Total Price:${Math.round(product.price*product.quantity)}</p>
            }
        </div>
    </div>
)

export default Product