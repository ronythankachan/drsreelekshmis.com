import React from 'react'
import './CartPage.css'
import CartItem from '../components/CartItem'
import CartHeader from '../components/CartHeader'
import CartInvoice from '../components/CartInvoice'

const CartPage = ({cart,setCart,userData}) => {

    const cartItems = cart.map(item=>{
        return <CartItem cart={cart} data={item} key={item.medicineId} setCart={setCart} userData={userData}/>
    })

    // Calculate total amount and delivery charge
    var total = 0
    var delivery = 20
    for(var i=0;i<cart.length;i++){
        total +=cart[i].price*cart[i].quantity
    }


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
                    <CartInvoice total={total} delivery={delivery} userData={userData}/>
                </div>
            </div>
        </div>

    )
}

export default CartPage
