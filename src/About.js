import React from 'react';
import './About.css';
import Doctors from './Doctors';
import Qualities from './Qualities';
import Vision from './Vision';

const About = () => {
    return (
        <div className="about">
            <Vision/>
            <Doctors/>
            <Qualities/>
        </div>
    )
}

export default About
