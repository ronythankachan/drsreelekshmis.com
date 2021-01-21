import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import BookAppointment from './BookAppointment';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import About from './About';
import Contact from './Contact';
import MedicineShop from './MedicineShop';
import Panchakarma from './Panchakarma';
import MarmaTherapy from './MarmaTherapy';
import PostDeliveryCare from './PostDeliveryCare';
import SwarnaPrashana from './SwarnaPrashana';
import Yoga from './Yoga';
function App() {

  const [isOpen,setIsOpen] =useState(false);
  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <div>
      <Router>
          <Navbar toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/book_appointment' component={BookAppointment}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/shop' component={MedicineShop}/>
              <Route path='/panchakarma' component={Panchakarma}/>
              <Route path='/marma_therapy' component={MarmaTherapy}/>
              <Route path='/post_delivery_care' component={PostDeliveryCare}/>
              <Route path='/swarna_prashana' component={SwarnaPrashana}/>
              <Route path='/yoga' component={Yoga}/>
          </Switch>
          <Footer/>
      </Router>
    </div>


  );
}

export default App;
