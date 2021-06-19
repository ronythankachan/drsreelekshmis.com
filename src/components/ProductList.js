import React,{useEffect} from 'react'
import './ProductList.css'
import ProductCard from '../components/ProductCard'
import backend from '../axios'
import { useState } from 'react'

const ProductList = ({query,category}) => {

    const [medicines, setMedicines] = useState([])
    useEffect(()=>{
        backend.get('/api/get_medicines',{
            params:{
                value:query+''+category
            }
        })
        .then((response)=>{
            setMedicines(response.data)
        },(error)=>{
            console.log(error)
        })
    },[query,category])


    const products = medicines.map(item => {
        return <ProductCard data={item} key={item._id}/>  
    })

    return (
        <div className="productlist">
            {
                products
            }
        </div>
    )
}

export default ProductList
