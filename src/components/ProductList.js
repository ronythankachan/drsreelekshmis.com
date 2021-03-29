import React,{useEffect} from 'react'
import './ProductList.css'
import ProductCard from '../components/ProductCard'
import backend from '../axios'
import { useState } from 'react'

const ProductList = () => {

    const [medicines, setMedicines] = useState([])
    useEffect(() => {
        backend.get('/api/get_medicines')
        .then((response)=>{
            setMedicines(response.data)
        },(error)=>{
            console.log(error)
        })
    }, [])

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
