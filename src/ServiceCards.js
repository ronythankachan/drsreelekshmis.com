import React from 'react';
import './ServiceCards.css';
import Panchakarma from './images/panchakarma.jpg';
import Marma from './images/marma_therapy.jpg';
import Yoga from './images/yoga.jpg';
    

const ServiceCards = () => {
    return (
        <div className="servicecards">
                <div className="card__type1">
                    <div className="card__image">
                        <img src = {Panchakarma} alt="panchakarma"/>
                    </div>
                    <div className="card__details">
                        <h2>Panchakarma</h2>
                        <p>Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.</p>
                    </div>
                </div>
                <div className="card__type1 card__type2">
                    <div className="card__image">
                        <img src = {Marma} alt="panchakarma"/>
                    </div>
                    <div className="card__details">
                        <h2>Marma therapy</h2>
                        <p>Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.</p>
                    </div>
                </div>
                <div className="card__type1">
                    <div className="card__image">
                        <img src = {Yoga} alt="panchakarma"/>
                    </div>
                    <div className="card__details">
                        <h2>Post Delivery Care</h2>
                        <p>Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.</p>
                    </div>
                </div>
        </div>
    )
}

export default ServiceCards
