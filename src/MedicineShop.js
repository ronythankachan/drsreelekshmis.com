import React from 'react';
import './MedicineShop.css';
import DeliveryBoyGif from './gif/delivery_boy.gif';

const MedicineShop = () => {
    return (
        <div className="medicineshop">
            <img src={DeliveryBoyGif} alt="delivery boy"></img>
            <h2>Order authentic kerala ayurvedic medicines. (COMING SOON)</h2>
        </div>
    )
}

export default MedicineShop
