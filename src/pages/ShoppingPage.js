import React from 'react'
import './ShoppingPage.css'
import ProductList from '../components/ProductList'
import SidePanelContainer from '../components/SidePanelContainer'


const ShoppingPage = () => {
    return (
        <div className="shoppingpage">
            <SidePanelContainer>
                {/* filters */}
                <p>Sidepanel items</p>
            </SidePanelContainer>
            <div className="shoppingpage__body">
                    {/* <Search/> */}
                    <ProductList/>
            </div>
        </div>
    )
}

export default ShoppingPage
