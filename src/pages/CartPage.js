import React,{useState, useEffect } from 'react'
import './CartPage.css'
import CartItem from '../components/CartItem'
import { Button } from 'react-bootstrap'
import backend from '../axios'

const CartPage = () => {
    const [cart, setCart] = useState([])

    useEffect(()=>{
        var userId = "602bd642603494016ba038c2" // User ID for Rony
        backend.post('/api/get_cart_items',{userId:userId})
        .then((response)=>{
            setCart(response.data)
        },(error)=>{
            console.log(error)
        })
    },[])
    const cartItems = cart.map(item => {
        return <CartItem data={item} key={item.medicineId}/>
    })

    return (
        <div className="cartpage">
            {cartItems}
            {cart.length>0?<Button variant="info">Proceed to checkout</Button>:null}
        </div>
    )
}

export default CartPage
