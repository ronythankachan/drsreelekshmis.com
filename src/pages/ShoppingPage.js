import React from 'react'
import './ShoppingPage.css'
import ProductList from '../components/ProductList'
import SidePanelContainer from '../components/SidePanelContainer'
import Search from '../components/Search'
import MedicineFilter from '../components/MedicineFilter'


const ShoppingPage = () => {
    return (
        <div className="shoppingpage">
            <SidePanelContainer>
                <MedicineFilter/>
            </SidePanelContainer>
            <div className="shoppingpage__body">
                    <Search/>
                    <ProductList/>
            </div>
        </div>
    )
}

export default ShoppingPage
