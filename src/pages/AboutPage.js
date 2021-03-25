import React from 'react';
import './AboutPage.css';
import Doctors from '../components/Doctors';
import Vision from '../components/Vision';

const AboutPage = () => {
    return (
        <div className="aboutpage">
            <Vision/>
            <Doctors/>
        </div>
    )
}

export default AboutPage
