import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ShoppingPage from './pages/ShoppingPage';
import PanchakarmaPage from './pages/PanchakarmaPage';
import MarmaTherapyPage from './pages/MarmaTherapyPage';
import PostDeliveryCarePage from './pages/PostDeliveryCarePage';
import SwarnaPrashanaPage from './pages/SwarnaPrashanaPage';
import YogaPage from './pages/YogaPage';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import RejuvenationPage from './pages/RejuvenationPage';
import AdminPanel from './components/AdminPanel';

function App() {

  const [isOpen,setIsOpen] =useState(false);
  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
      <Router>
          <Navbar toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <ScrollToTop/>
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/about' component={AboutPage}/>
              <Route path='/contact' component={ContactPage}/>
              <Route path='/book_appointment' component={BookAppointmentPage}/>
              <Route path='/shop' component={ShoppingPage}/>
              <Route path='/appointments' component={AdminPanel}/>
              <Route path='/rejuvenation' component={RejuvenationPage}/>
              <Route path='/panchakarma' component={PanchakarmaPage}/>
              <Route path='/marma_therapy' component={MarmaTherapyPage}/>
              <Route path='/post_delivery_care' component={PostDeliveryCarePage}/>
              <Route path='/swarna_prashana' component={SwarnaPrashanaPage}/>
              <Route path='/yoga' component={YogaPage}/>
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App;
