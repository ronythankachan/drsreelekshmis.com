import React,{useState}  from 'react'
import './Rejuvenation.css'
import {Button} from 'react-bootstrap'
import HomeAppointment from './HomeAppointment'
import RejuvenationImg from '../images/rejuvenation.jpg'
import Abhyunga from '../images/Rejuvenation/abhyunga.jpg'
import PindaImg from '../images/Rejuvenation/pinda.jpg'
import Shastika from '../images/Rejuvenation/shastika.jpg'
import Kati from '../images/Rejuvenation/kati.jpg'
import Udvartana from '../images/Rejuvenation/udvartanam.jpg'
import Dhaara from '../images/Rejuvenation/dhaara.jpg'

const data = [
    {
        id:1,
        heading:'Abhyanga (Massage) and steam bath',
        image:Abhyunga,
        content:"Massage is done using specific oils depending on the disease and condition of the patient. The process will help improve blood circulation, tone up the muscles, reduces pain and inflammation in the body and improves skin tone."
    },
    {
        id:2,
        heading:'Pinda sweda/Kizhi (Heat fomentation using herbs)',
        image:PindaImg,
        content:"This procedure is done using a bolus of medicinal herbs, powders and roots roasted in medicated oil and tied in a cloth and used for rubbing on the affected part of the body. This process helps reduce pain and inflammation in joints caused due to different kinds of arthritis and other musculoskeletal diseases."
    },
    {
        id:3,
        heading:'Shastika shali pinda sweda (SSPS)',
        image:Shastika,
        content:"SSPS is similar to patrapinda sweda except that the medicine used for making the bolus is not herbs but shashtika rice cooked and soaked in herbal decoction or milk before rubbing on the body. This helps improve strength and tone of muscles, gives nourishment to the body, improves health and immunity, and maintain good skin tone."
    },
    {
        id:4,
        heading:'Kati, Greeva & Janu basti',
        image:Kati,
        content:"Basti is the process in which warm medicated oils are made to stand on back (Kati), neck (Greeva) and knee (Janu) joints. This helps to lubricate the joints, reduce inflammation and pain. This process is used to treat disorders like osteoarthritis, spondylosis, spondylitis, rheumatoid arthritis, slip disc and sciatica."
    },
    {
        id:5,
        heading:'Udvartanam',
        image:Udvartana,
        content:"Procedure of massaging the body with dry herbal powder in the upward direction is Udvarthanam. Udvartanam is majorly used in the treatment of obesity. Rubbing the body briskly with specific herbal powders helps to reduce fat stored beneath the skin and reduces body weight. The procedure also removes dead skin, improves blood circulation, tones up the muscles, firms the skin and gives better complexion."
    },
    {
        id:6,
        heading:'Abhyanga (Massage) and steam bath',
        image:Dhaara,
        content:"In Dhaara therapy, medicated oil/kashayam/milk/buttermilk is steadily poured on the affected part of the body without break for specific time. Dhaara is done on the forehead to treat diseases like depression, head ache, sleeplessness, stress, and hypertension. It is also done over other parts of the body for treating neurological and musculoskeletal disorders. Dhaara helps improve the health of muscles and nerves, reduces inflammation and lubricates the joints."
    },
    {
        id:7,
        heading:'Pichu',
        content:"Pichu is one of the therapies in Ayurveda that involves application of cotton dipped in luke warm medicated oil on local body parts for pain relief and inflammation. It also helps in chronic headache and insomnia, scalp diseases and skin disorders. It induces sleep, improves memory, and cures pain of neck, back, knee and other joints."
    },
    {
        id:8,
        heading:'Lepam',
        content:"Lepam is the application of different kind of pastes over body parts for specific therapeutic effects. Majorly it is used in the treatment of musculoskeletal disorders for the management of pain and in skin diseases and to improve complexion."
    }
]


const ContentWithImage = ({heading, image, content}) =>{
    return (
        <div className="content__with__image">
            <img src={image} alt=""/>
            <div>
                <h2>{heading}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}
const ContentWithOutImage = ({heading,content}) =>{
    return (
        <div className="content__without__image">
            <h2>{heading}</h2>
            <p>{content}</p>
        </div>
    )
}
const contentCards = data.map(item => {
        if(item.image){
            return <ContentWithImage key={item.id} heading={item.heading} image={item.image} content={item.content}/>
        }else{
            return <ContentWithOutImage key={item.id} heading={item.heading} content={item.content}/>
        }
    }
)


const Rejuvenation = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="rejuvenation">
            <div className="content__title">
                <h1>Rejuvenation &amp; Pain Relief Therapies</h1>
                <div className="highlighted_notification">
                    <p>All Rejuvenation &amp; Pain Relief Therapies  will be done at home by trained therapists under doctor’s supervision.</p>
                </div>
                <img src={RejuvenationImg} alt="swarna prashana" />
                <p>There are several therapies in Ayurveda which helps in the treatment of musculoskeletal diseases like slip disc, joint pains, arthritis of different kind, spondylosis and spondylitis. It is also used in the treatment of  neurological diseases, skin disorders, obesity, stress, depression, insomnia and migraine. These therapies include:</p>
            </div>
            <div className="content__cards">
                {contentCards}
            </div>
            <Button className="book__button" variant="success" onClick={handleShow}>Book Appointment</Button>
            <HomeAppointment handleClose={handleClose} show={show} />
        </div>
    )
}
export default Rejuvenation
