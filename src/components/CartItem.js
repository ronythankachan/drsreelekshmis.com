import React from 'react'
import './CartItem.css'

const CartItem = ({data}) => {

    console.log(data)

    // delete an item from cart 
    const deleteItem = () =>{
        console.log("deleting item")
    }

    // increment quantity of an item
    const incrementQuantity = () =>{
        console.log("incrementing quantity")
    }

    // increment quantity of an item
    const decrementQuantity = () =>{
        console.log("decrementing quantity")
    }


    return (
        <div className="cartitem">
            <div className="item__img">
                <img src={data.img} alt=""/>
            </div>
            <div className="item__content">
                <div className="price__and__deletebtn">
                    <h4>Rs. {data.price}</h4>
                    <button onClick={deleteItem}>X</button>
                </div>
                <p>{data.name} ( {data.category} )</p>
                <div className="item__quantity">
                    <p>Quantity</p>
                    <button onClick={incrementQuantity}>-</button>
                    <p>{data.quantity}</p>
                    <button onClick={decrementQuantity}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem