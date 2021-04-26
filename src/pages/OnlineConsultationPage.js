import React from 'react'
import './OnlineConsultationPage.css'
import OnlineConsulatationInfo from '../components/OnlineConsultationInfo'
import OnlineConsultationForm from '../components/OnlineConsultationForm'


const OnlineConsulatationPage = () => {
    return (
        <div className="onlineconsulatationage">
            <div className="onlineconsultationinfo">
                <OnlineConsulatationInfo/>
            </div>
            <div className="onlineconsultationform">
                <OnlineConsultationForm/>
            </div>
        </div>
    )
}

export default OnlineConsulatationPage
