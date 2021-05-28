import React from 'react'
import './ProductCard.css'
import { Button } from 'react-bootstrap'
import backend from '../axios'
import { useContext } from 'react'
import { UserContext } from '../App'

const ProductCard = ({data}) => {
    const {cartUpdated,setCartUpdated} =useContext(UserContext)
    const addToCart =(medicineId)=>{
        var userId = "60aeb96102003012efe28cd9" // User ID for Rony
        backend.post('/api/add_to_cart',{userId:userId,medicineId:medicineId,quantity:1}).then(
            (response)=>{
                console.log(response.data)
                setCartUpdated(!cartUpdated)
            },(error)=>{
                console.log("failed to add item to cart",error)
            }
        )
        console.log(`adding ${medicineId} item to Cart`)
    }
    const buyNow = (medicineId)=>{
        addToCart(medicineId)
    }


    return (
        <div className="productcard">
            <img src={data.img} alt=""/>
            <h3>{data.name} <small>({data.category})</small></h3> 
            <h3>Rs. {data.price}</h3>
            <p>{data.description}</p>
            <div className="productcard__buttons">
                <Button variant="warning" onClick={()=>addToCart(data._id)}>Add to Cart</Button>
                <Button variant="success" onClick={()=>buyNow(data._id)} href="/cart">Buy Now</Button>
            </div>
        </div>
    )
}

export default ProductCard
