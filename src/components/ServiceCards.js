import React from 'react';
import './ServiceCards.css';
import Panchakarma from '../images/panchakarma.jpg';
import Marma from '../images/marma_therapy.jpg';
import PostDeliveryCare from '../images/post_delivery_care.jpg';
import SwarnaPrashana from '../images/swarna_prashana.jpg';
import Yoga from '../images/yoga.jpg';
import SCard from './SCard';

const cardData = [
    {
        name: "Panchakarma",
        image: Panchakarma,
        description: "Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.",
        direction: "row",
        readmore:"/panchakarma"
    },
    {
        name: "Marma Therapy",
        image: Marma,
        description: "Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.",
        direction: "row-reverse",
        readmore:"/marma_therapy"
    },
    {
        name: "Post Delivery Care",
        image: PostDeliveryCare,
        description: "Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.",
        direction: "row",
        readmore:"/post_deliery_care"
    },
    {
        name: "Swarna Prashana",
        image: SwarnaPrashana,
        description: "Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.",
        direction: "row-reverse",
        readmore:"/swarna_prashana"
    },
    {
        name: "Yoga",
        image: Yoga,
        description: "Panchakarma is a combination of five procedures of purification- Vamana (Emesis), Virechana (Purgation), Niroohavasti (Decoction enema), Nasya (instillation of medicine through nostrils), and Anuvasanavasti (Oil enema). These procedures aim at plucking away the deep rooted imbalances in the body. We offer panchakarma services at your doorstep.",
        direction: "row",
        readmore:"/yoga"
    }
]

const serviceCards = cardData.map((data)=>{
        return <SCard name={data.name} image={data.image} description={data.description} direction={data.direction} readmore={data.readmore}/> 
})

const ServiceCards = () => {
    return (
        <div className="servicecards">
               {serviceCards}
        </div>
    )
}

export default ServiceCards
