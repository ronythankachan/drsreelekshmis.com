import React, {useState} from 'react'
import './CartItem.css'
import {Button} from 'react-bootstrap'
import backend from '../axios'

const userId = "602bd642603494016ba038c2" // User ID for Rony
const CartItem = ({data,total,setTotal}) => {
    const [quantity, setQuantity] = useState(data.quantity);

    const addQuantity = () =>{
        setQuantity(quantity+1)
        backend.post('/api/add_to_cart',{userId:userId,medicineId:data.medicineId,quantity:1}).then(
            (response)=>{
                setTotal(total+data.price)
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
                    setTotal(total-data.price)
                },(error)=>{
                    console.log("failed to add item to cart",error)
                }
            )
            console.log(`adding ${data.medicineId} item to Cart`)
        }
    }

    const deleteItem = () =>{
        backend.post('/api/remove_from_cart',{userId:userId,medicineId:data.medicineId}).then(
            (response)=>{
                setTotal(total-data.quantity*data.price)
            },(error)=>{
                console.log("failed to delete medicine from cart",error)
            }
        )
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
                <h3>Amount : {quantity * data.price}</h3>
                <Button onClick={deleteItem}>Delete</Button>
            </div>
        </div>
    )
}

export default CartItem
