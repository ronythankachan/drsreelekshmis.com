import React,{useState} from 'react'
import './Panchakarma.css'
import {Button} from 'react-bootstrap'
import HomeAppointment from './HomeAppointment'
import PanchakarmaImg from '../images/panchakarma2.jpg'

const Panchakarma = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="panchakarma">
            <div className="content__title">
                <h1>Ayurveda Panchakarma Therapy</h1>
                <div className="highlighted_notification">
                    <p>All Panchakarma therapies will be done at home by trained therapists under doctor’s supervision.</p>
                </div>
                <img src={PanchakarmaImg} alt="" />
                <h2>Panchakarma (Detox therapies)</h2>
                <p>Panchakarma, which literally means five purification procedures, are specialized treatment techniques used in Ayurveda for detoxification,  improving health, and treating specific diseases.</p>
            </div>
            <div className="content">
                <div className="sub_heading2">
                    <h3> 1.	Vamana (Therapeutically induced vomiting)</h3>
                    <p>This procedure is mainly done to balance the Kapha dosa in the body. It eliminates toxins from the upper part of the body. The procedure takes 2 hours and will be administered at home under supervision of a doctor. </p>
                    <h5>Benefits</h5>
                    <p>Helps cure diseases like</p>
                    <ul>
                        <li>Bronchial asthma</li>
                        <li>Sinusitis</li>
                        <li>Migraine</li>
                        <li>Rhinitis</li>
                        <li>Indigestion</li>
                        <li>Acidity</li>
                        <li>Tastelessness</li>
                        <li>Obesity</li>
                        <li>Diabetes</li>
                        <li>Psoriasis</li>
                        <li>Eczema</li>
                        <li>Urticaria</li>
                        <li>High cholestrol levels in blood (Dyslipideamia)</li>
                    </ul>
                    <h3> 2.	Virechana (Therapeutically induced loose motion)</h3>
                    <p>Purgation/virechana is inducing controlled loose motion by administering specific herbal medicines to remove toxins from the body. This process helps to enhance the receptivity of medicines administered for specific health problems. </p>
                    <h5>Benefits</h5>
                    <ul>
                        <li>Flushes out toxins from the body</li>
                        <li>Improves liver function</li>
                        <li>Cures obesity </li>
                        <li>Helps reduce skin diseases like psoriasis, urticaria and eczema</li>
                        <li>Reduces hypertension</li>
                        <li>Improves sleep</li>
                        <li>Reduces stress and anxiety </li>
                    </ul>
                    <h3> 3. Basti (Medicated enema)</h3>
                    <p>Through this procedure medicated oils and decoctions will be introduced to the colon of the patient through enema. Basti is done repeatedly for specific number of days depending on the disease and condition of the patient. </p>
                    <h5>Benefits</h5>
                    <ul>
                        <li>Cures neurological conditions like back/neck pain, arthritis of various kinds.</li>
                        <li>Slip disc and associated pain.</li>
                        <li>Helps heal menstrual problems like loss of menstruation, PCOD, Uterine polyps, uterine fibroids, Irregular periods, painful menstruation.</li>
                        <li>Helps to cure infertility in both men and women.</li>
                        <li>Helps in the rejuvenation of body.</li>
                    </ul>
                    <h3> 4. Nasya (Instillation of medicines to nose)</h3>
                    <p>Nasya is the procedure in which different medications especially medicated oils are instilled in to the nose for specific number of days.</p>
                    <h5>Benefits</h5>
                    <ul>
                        <li>Helps cure sinusitis</li>
                        <li>Good for chronic migraine</li>
                        <li>Chronic cough</li>
                        <li>COPD and Asthma</li>
                        <li>Reduces nasal congestion and allergy</li>
                        <li>Improves voice</li>
                    </ul>
                    <h3> 5. Rakta mokshana (Blood letting)</h3>
                    <p>Blood-letting is an important therapy used in the treatment of several disease conditions. In this we carefully remove small quantities of impure blood to reduce accumulated toxins.</p>
                    <h5>Benefits</h5>
                    <ul>
                        <li>Effective in managing skin conditions like eczema, psoriasis, alopecia and allergy</li>
                        <li>Helps treat conditions like sciatica, frozen shoulder, arthritis of knee, neck and back pain.</li>
                        <li>Helps heal varicose ulcers, non healing ulcers, diabetic wounds.</li>
                    </ul>
                </div>
            </div>
            <Button className="book__button" variant="success" onClick={handleShow}>Book Appointment</Button>
            <HomeAppointment handleClose={handleClose} show={show} />
        </div>
    )
}

export default Panchakarma
