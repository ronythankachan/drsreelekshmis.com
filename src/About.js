import React from 'react';
import './About.css';
import Doctors from './Doctors';
import Qualities from './Qualities';

const About = () => {
    return (
        <div className="about">
            <Doctors/>
            <Qualities/>
        </div>
    )
}

export default About
