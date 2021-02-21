import React from 'react'
import {Button} from 'react-bootstrap'
import './SCard.css'

const SCard = ({image, name, description, direction}) => {
    return (
        <div className="scard" style={{flexDirection:direction}}>
            <div className="card__image">
                <img src = {image} alt="panchakarma"/>
            </div>
            <div className="card__details">
                <h2>{name}</h2>
                <p>{description}</p>
                <Button variant="warning" style={{marginRight:"10px"}}> Read More</Button>
                <Button variant="success" >Book Now</Button>
            </div>
        </div>
    )
}

export default SCard
