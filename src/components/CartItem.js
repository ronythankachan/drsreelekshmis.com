import React, {useState} from 'react'
import './CartItem.css'
import {Button} from 'react-bootstrap'
import backend from '../axios'


const CartItem = ({data}) => {
    const [quantity, setQuantity] = useState(data.quantity);

    const addQuantity = () =>{
        setQuantity(quantity+1)
        var userId = "602bd642603494016ba038c2" // User ID for Rony
        backend.post('/api/add_to_cart',{userId:userId,medicineId:data.medicineId,quantity:1}).then(
            (response)=>{
                console.log(response.data)
                alert(response.data)
            },(error)=>{
                console.log("failed to add item to cart",error)
            }
        )
        console.log(`adding ${data.medicineId} item to Cart`)
    }

    const subtractQuantity = () =>{
        if(quantity>1){
            setQuantity(quantity-1)
            var userId = "602bd642603494016ba038c2" // User ID for Rony
            backend.post('/api/add_to_cart',{userId:userId,medicineId:data.medicineId,quantity:-1}).then(
                (response)=>{
                    console.log(response.data)
                    alert(response.data)
                },(error)=>{
                    console.log("failed to add item to cart",error)
                }
            )
            console.log(`adding ${data.medicineId} item to Cart`)
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
