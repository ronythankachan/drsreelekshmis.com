import React from 'react';
import './AboutPage.css';
import Doctors from '../components/Doctors';
import Qualities from '../components/Qualities';
import Vision from '../components/Vision';

const AboutPage = () => {
    return (
        <div className="aboutpage">
            <Vision/>
            <Doctors/>
            <Qualities/>
        </div>
    )
}

export default AboutPage
