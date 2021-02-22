import React from 'react'
import {Button} from 'react-bootstrap'
import './SCard.css'

const SCard = ({image, name, description, direction, readmore}) => {
    return (
        <div className="scard" style={{flexDirection:direction}}>
            <div className="card__image">
                <img src = {image} alt="panchakarma"/>
            </div>
            <div className="card__details">
                <h2>{name}</h2>
                <p>{description}</p>
                <Button variant="info" href={readmore}>Read More&nbsp;&nbsp;&gt;&gt;</Button>
            </div>
        </div>
    )
}

export default SCard
