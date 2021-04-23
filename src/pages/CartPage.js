import React from 'react'
import './CartPage.css'
import CartItem from '../components/CartItem'
import CartHeader from '../components/CartHeader'
import CartInvoice from '../components/CartInvoice'

const CartPage = ({cart,setCart}) => {

    const cartItems = cart.map(item=>{
        return <CartItem data={item} key={item.medicineId}/>
    })

    return (
        <div className="cartpage__container">
            <div className="cartpage">
                <div className="cartpage__main">
                    <CartHeader title="My Cart"/>
                    {cartItems}
                    <small>** Usually we ship medicines in 3-4 business days. For any further enquiries, please contact our helpline number at +91 97404 76241</small>
                </div>
                <div className="cartpage__right">
                    <CartHeader title="Total"/>
                    <CartInvoice total={120} delivery={20}/>
                </div>
            </div>
        </div>

    )
}

export default CartPage
