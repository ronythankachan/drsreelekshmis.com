import React, { useState } from 'react'
import './ShoppingPage.css'
import ProductList from '../components/ProductList'
import {Spinner} from 'react-bootstrap'


const ShoppingPage = () => {
    const [loading, setLoading] = useState(true)

    return (
        <div className="shoppingpage">
            <ProductList loading={setLoading}/>
        </div>
    )
}

export default ShoppingPage
