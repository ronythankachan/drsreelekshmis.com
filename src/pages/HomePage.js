import React from 'react';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';

const HomePage = ()=> {
    return (
        <div className="homepage">
            <Hero/>
            <ServiceCards/>
        </div>
    )
}

export default HomePage
