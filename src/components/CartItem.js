import React, {useState} from 'react'
import './CartItem.css'
import {Button} from 'react-bootstrap'


const CartItem = ({data}) => {
    const [quantity, setQuantity] = useState(data.quantity);

    const addQuantity = () =>{
        setQuantity(quantity+1)
    }

    const subtractQuantity = () =>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="cartitem">
            <div className="product__image">
                <img src={data.img} alt=""/>
            </div>
            <div className="product__details">
                <h3>{data.name} <small>({data.category})</small></h3> 
                <div className="quantity">
                    <Button style={{paddingTop:"0px"}}onClick={subtractQuantity} variant="secondary">-</Button>
                    <h3>{quantity}</h3>
                    <Button onClick={addQuantity} variant="secondary">+</Button>
                </div>
                <div className="total">
                    <h3>Amount : {quantity * data.price}</h3>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem
