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
        description: "Marma points therapy is a traditional Ayurvedic massage technique that's believed to help sustain the flow of energy throughout your body. There are 107 marma points located around your body. Stimulation of these points is said to affect everything from the health of your organs to the production of hormones and more.",
        direction: "row-reverse",
        readmore:"/marma_therapy"
    },
    {
        name: "Post Delivery Care",
        image: PostDeliveryCare,
        description: "What is postpartum care? The postpartum period refers to the first six weeks after childbirth. This is a joyous time, but it's also a period of adjustment and healing for mothers. During these weeks, you'll bond with your baby and you'll have a post-delivery checkup with your doctor.",
        direction: "row",
        readmore:"/post_deliery_care"
    },
    {
        name: "Swarna Prashana",
        image: SwarnaPrashana,
        description: "Suvarnaprashan is a Ayurvedic Immunomodulatory Medicine Preparation for 0 to 12 years of child. Suvarnaprashan is made by Suvarna Bhasma (purified Gold Ash) and other important herbs. ... Overall Suvarnaprashan makes child healthier both physically and mentally.",
        direction: "row-reverse",
        readmore:"/swarna_prashana"
    },
    {
        name: "Yoga",
        image: Yoga,
        description: "Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six Āstika schools of Indian philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism.",
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
