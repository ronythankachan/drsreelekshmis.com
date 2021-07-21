import React from 'react'
import './ProductCard.css'
import { Button } from 'react-bootstrap'

const addToCart =(id)=>{
    console.log('adding',id,' item  to Cart')
}
const buyNow = (id) => {
    console.log('adding',id,' item  to Cart and opening Cart')
}

const ProductCard = ({data}) => {
    console.log(data)
    return (
        <div className="productcard">
            <img src={data.img} alt=""/>
            <h3>{data.name} <small>({data.category})</small></h3> 
            <h3>Rs. {data.price}</h3>
            <p>{data.description}</p>
            <div className="productcard__buttons">
                <Button variant="warning" onClick={()=>addToCart(data.id)}>Add to Cart</Button>
                <Button variant="success" onClick={()=>buyNow(data.id)}>Buy Now</Button>
            </div>
        </div>
    )
}

export default ProductCard
