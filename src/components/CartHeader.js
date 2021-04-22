import React from 'react'
import './CartHeader.css'
const CartHeader = ({title}) => {
    return (
        <div className="cartheader">
            <h1>{title}</h1>
        </div>
    )
}

export default CartHeader
