import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Hero from './Hero';
import ServiceCards from './ServiceCards';

const Home = ()=> {
    const [isOpen,setIsOpen] =useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div className="home">
            <Navbar toggle={toggle}/>
            <Hero/>
            <ServiceCards/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
        </div>
    )
}

export default Home
