import React from "react";

const CustomButton = ({clickHandler,children}) => (
    <button className='p-2 mt-4 text-white bg-blue-500 rounded-lg w-28 border-2 border-transparent hover:border-blue-500 hover:text-blue-500 hover:bg-white'
            onClick={clickHandler}>{children}
    </button>
)

export default CustomButton;