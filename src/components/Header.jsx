import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({ itemCount }) => (
  <div className='flex items-center justify-between bg-slate-700 h-14 px-10'>
    <Link to='/' className='text-white cursor-pointer'>
          Ecommerce
    </Link>
    <Link to='/cart' className='text-white text-xl cursor-pointer'>
          Cart{itemCount > 0 && `(${itemCount})`}
    </Link>
  </div>
)

export default Header