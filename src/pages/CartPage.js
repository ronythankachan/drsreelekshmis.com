import React from 'react'
import './CartPage.css'
import PlaceHolder from '../images/Shop/placeholder.png'
import CartItem from '../components/CartItem'

const testData = [
    {
        id:1,
        name:'Abhayarishtam',
        category:'Arishtam',
        description:'Abhayarishtam description',
        price:120,
        quantiy:23,
        img:PlaceHolder

    },
    {
        id:2,
        name:'Ashta Choornam',
        category:'Choornam',
        description:'Ashta Choornam description',
        price:320,
        quantiy:49,
        img:PlaceHolder
    }
]

const products = testData.map(item => {
    return <CartItem data={item}/>
})


const CartPage = () => {
    return (
        <div className="cartpage">
            {products}
        </div>
    )
}

export default CartPage
