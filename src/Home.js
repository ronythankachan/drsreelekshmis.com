import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Home = ()=> {
    const [isOpen,setIsOpen] =useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle}/>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>

            
            <Sidebar isOpen={isOpen} toggle={toggle}/>

        </>
    )
}

export default Home
