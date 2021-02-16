import React from 'react';
import './ServiceCards.css';
import Panchakarma from './images/panchakarma.jpg';
import Marma from './images/marma_therapy.jpg';
import PostDeliveryCare from './images/post_delivery_care.jpg';
import SwarnaPrashana from './images/swarna_prashana.jpg';
import Yoga from './images/yoga.jpg';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ServiceCards = () => {
    return (
        <div className="servicecards">
                <div className="data_card">
                    <div className="card__image">
                        <img src = {Panchakarma} alt="panchakarma"/>
                    </div>
                    <div className="card__details">
                        <h2>Panchakarma</h2>
                        <p>Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.</p>
                    </div>
                </div>
                <div className="data_card" style={{flexDirection:"row-reverse"}}>
                    <div className="card__image">
                        <img src = {Marma} alt="panchakarma"/>
                    </div>
                    <div className="card__details">
                        <h2>Marma therapy</h2>
                        <p>Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.</p>
                    </div>
                </div>
                <div className="data_card" >
                    <div className="card__image">
                        <img src = {PostDeliveryCare} alt="panchakarma"/>
                    </div>
                    <div className="card__details">
                        <h2>Post Delivery Care</h2>
                        <p>Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.</p>
                    </div>
                </div>
                <div className="data_card" style={{flexDirection:"row-reverse"}}>
                    <div className="card__image">
                        <img src = {SwarnaPrashana} alt="panchakarma"/>
                    </div>
                    <div className="card__details">
                        <h2>Swarna prashana</h2>
                        <p>Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.</p>
                    </div>
                </div>
                <div className="data_card">
                    <div className="card__image">
                        <img src = {Yoga} alt="panchakarma"/>
                    </div>
                    <div className="card__details">
                        <h2>Yoga</h2>
                        <p>Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.</p>
                    </div>
                </div>
        </div>
    )
}

export default ServiceCards
