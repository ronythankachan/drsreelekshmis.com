import React,{useState} from 'react'
import './ProductCard.css'
import { Button } from 'react-bootstrap'
import backend from '../axios'
import { useContext } from 'react'
import { UserContext } from '../App'

const ProductCard = ({data}) => {
    const {user,cartUpdated,setCartUpdated} =useContext(UserContext)
    const [alertClasses,setAlertClasses] = useState("simple__alert alert__hide")
    const [alertMsg,setAlertMsg] =useState()
    const addToCart =(medicineId)=>{
        setAlertClasses("simple__alert alert__hide")
        if(user){
            backend.post('/api/add_to_cart',{userId:user.userId,medicineId:medicineId,quantity:1}).then(
                ()=>{
                    setAlertClasses("simple__alert")
                    setAlertMsg("Added to cart")
                    setCartUpdated(!cartUpdated)
                    setTimeout(() => {
                        setAlertClasses("simple__alert alert__hide")
                        setAlertMsg('')
                    }, 2000);
                },(error)=>{
                    console.log("failed to add item to cart",error)
                }
            )
            console.log(`adding ${medicineId} item to Cart`)
        }else{
            setAlertClasses("simple__alert orange")
            setAlertMsg("Please Login First")
            setTimeout(() => {
                setAlertClasses("simple__alert alert__hide")
                setAlertMsg('')
            }, 2000);
        }
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
            <div className={alertClasses}>
                {alertMsg}
            </div>
        </div>
    )
}

export default ProductCard
