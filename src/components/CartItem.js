import React from 'react'
import './CartItem.css'

const CartItem = () => {

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
                <img src="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPEYEBOGLER-COSEVE88413F32E363/1601890054864_0..jpg" alt=""/>
            </div>
            <div className="item__content">
                <div className="price__and__deletebtn">
                    <h4>Rs. 60.0</h4>
                    <button onClick={deleteItem}>X</button>
                </div>
                <p>Chandra Choornam ( choornam )</p>
                <div className="item__quantity">
                    <p>Quantity</p>
                    <button onClick={incrementQuantity}>-</button>
                    <p>1</p>
                    <button onClick={decrementQuantity}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem