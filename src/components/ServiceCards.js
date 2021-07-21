import React from 'react';
import './ServiceCards.css';
import Panchakarma from '../images/panchakarma.jpg';
import Rejuvenation from '../images/rejuvenation.jpg';
import PostDeliveryCare from '../images/post_delivery_care.jpg';
import SwarnaPrashana from '../images/swarna_prashana.jpg';
import Yoga from '../images/yoga.jpg';
import SCard from './SCard';

const cardData = [
    {
        name: "Rejuvenation & Pain Relief Therapies",
        image: Rejuvenation,
        description: "There are several therapies in Ayurveda which helps in the treatment of musculoskeletal diseases like slip disc, joint pains, arthritis of different kind, spondylosis and spondylitis. It is also used in the treatment of neurological diseases, skin disorders, obesity, stress, depression, insomnia and migraine.",
        direction: "row",
        readmore:"/rejuvenation"
    },
    {
        name: "Panchakarma",
        image: Panchakarma,
        description: "Panchakarma literally meaning five purificatory procedures are specialized treatment techniques used in Ayurveda for detoxification, to improve health and to treat specific diseases.",
        direction: "row-reverse",
        readmore:"/panchakarma"
    },
    {
        name: "Pregnancy & Post Delivery Care",
        image: PostDeliveryCare,
        description: "We provide simple home based herbal formulations and diet plans for common health problems associated with pregnancy like nausea, constipation, back pain, sleeplessness, gastritis, joint pain, fatigue and stress. Post delivery care therapies include massage, steam bath, dhara, vethu kuli (bath with medicated water), pichu, lepa and several other modalities which will help reduce belly, strengthen and tone muscles and skin and give nourishment to the body to recover fully post delivery.",
        direction: "row",
        readmore:"/post_delivery_care"
    },
    {
        name: "Swarna Prashana",
        image: SwarnaPrashana,
        description: "Swarna prashana is an ancient practice of giving gold and vacha (Acorus calamus roots) and other brain stimulating medicines to the new born kid along with or without addition of breast milk. We provide specific Ayurvedic ghee preparations during every month on the date of Pushya nakshatra for kids of the age between 6 months to 10 years on appointment basis.",
        direction: "row-reverse",
        readmore:"/swarna_prashana"
    },
    {
        name: "Therapeutic Yoga",
        image: Yoga,
        description: "Yoga is a life style. Most recent researches prove that Yoga is not just a health practice but also a treatment modality for systemic disorders. We teach Yoga to kids and for the elderly for its health benefits. We also provide therapeutic yoga sessions for specific disorders like diabetes, hypertension, obesity, stress, depression, insomnia, menstrual disorders and hormonal problems. ",
        direction: "row",
        readmore:"/yoga"
    }
]

const serviceCards = cardData.map((data, index)=>{
        return <SCard name={data.name} image={data.image} description={data.description} direction={data.direction} readmore={data.readmore} key={index}/> 
})

const ServiceCards = () => {
    return (
        <div className="servicecards">
               {serviceCards}
        </div>
    )
}

export default ServiceCards
