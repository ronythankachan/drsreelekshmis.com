import React,{useEffect} from 'react'
import './ProductList.css'
import PlaceHolder from '../images/Shop/placeholder.png'
import ProductCard from '../components/ProductCard'
import backend from '../axios'
import { useState } from 'react'

const ProductList = ({setLoading}) => {


    const [medicines, setMedicines] = useState([])

    // Get all the medicine lists
    useEffect(() => {
        backend.get('/api/get_medicines')
        .then((response)=>{
            console.log(response)
            setMedicines(response.data)
            console.log("medicines", medicines)
        },(error)=>{
            console.log(error)
        })
    }, [])

    const products = medicines.map(item => {
        return <ProductCard data={item} key={item._id}/>  
    })

    return (
        <div className="productlist">
            {products}
        </div>
    )
}

export default ProductList
