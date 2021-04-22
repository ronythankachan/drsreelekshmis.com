import React from 'react'
import './CartInvoice.css'
import {Button} from 'react-bootstrap'

const CartInvoice = ({total,delivery}) => {

    const checkOut = () =>{
        console.log("checking out items")
    }

    return (
        <div className="cartinvoice">
            <div className="cartinvoice__item">
                <p>Amount</p>
                <p>Rs. {total}</p>
            </div>
            <div className="cartinvoice__item">
                <p>Delivery</p>
                <p>Rs. {delivery}</p>
            </div>
            <div className="cartinvoice__item">
                <h4>Sub-total</h4>
                <h4>Rs. {total+delivery}</h4>
            </div>
            <div className="checkout__btn">
                <Button variant="success" onClick={checkOut}>CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartInvoice
