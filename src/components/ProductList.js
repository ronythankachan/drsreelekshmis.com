import React from 'react'
import './ProductList.css'
import PlaceHolder from '../images/Shop/placeholder.png'
import ProductCard from '../components/ProductCard'

const testData =[
    {
        id:1,
        name:'Abhayarishtam',
        category:'Arishtam',
        description:'Abhayarishtam description',
        price:120,
        quantiy:23,
        img:PlaceHolder

    },
    {
        id:2,
        name:'Ashta Choornam',
        category:'Choornam',
        description:'Ashta Choornam description',
        price:320,
        quantiy:49,
        img:PlaceHolder
    },
    {
        id:3,
        name:'Brahmi Ghritham',
        category:'Ghritam',
        description:'Brahmi Ghritham description',
        price:500,
        quantiy:42,
        img:PlaceHolder
    },
    {
        id:4,
        name:'Amrutharishtam',
        category:'Arishtam',
        description:'Amrutharishtam description',
        price:143,
        quantiy:53,
        img:PlaceHolder
    }
]

const products = testData.map(item => {
    return <ProductCard data={item} key={item.id}/>  
})

const ProductList = () => {
    return (
        <div className="productlist">
            {products}
        </div>
    )
}

export default ProductList
