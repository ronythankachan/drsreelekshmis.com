import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
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
import CartPage from './pages/CartPage';
import TestPage from './pages/TestPage';
import backend from './axios'
import MyOrdersPage from './pages/MyOrdersPage';
import BookAppointmentPage from './pages/BookAppointmentPage';



var userId = "602bd642603494016ba038c2" // User ID for Rony
function App() {
    // set login
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    // fetch cart data and store it in state. when cart changes, fetch it from db
    const [cart, setCart] = useState([])
    const [isCartLoaded, setIsCartLoaded] = useState(false)
    const [isOpen,setIsOpen] =useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    // This will execute when loading and whenever cart value changes
    useEffect(() => {
        backend.post('/api/get_cart_items',{userId:userId})
            .then((response)=>{
                if(!isCartLoaded){
                    setIsCartLoaded(true)
                }
                setCart(response.data)
            },(error)=>{
                console.log(error)
            })
    },[isCartLoaded])

    return (
        <Router>
            <Navbar toggle={toggle} cartCount={cart.length} isLoggedIn setIsLoggedIn={setIsLoggedIn}/>
            <Sidebar isOpen={isOpen} toggle={toggle} cartCount={cart.length} isLoggedIn/>
            <ScrollToTop/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route path='/book_appointment' component={BookAppointmentPage}/>
                <Route path='/appointments' component={AdminPanel}/>
                <Route path='/sign_in' component={()=><AdminPanel setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route path='/rejuvenation' component={RejuvenationPage}/>
                <Route path='/panchakarma' component={PanchakarmaPage}/>
                <Route path='/marma_therapy' component={MarmaTherapyPage}/>
                <Route path='/post_delivery_care' component={PostDeliveryCarePage}/>
                <Route path='/swarna_prashana' component={SwarnaPrashanaPage}/>
                <Route path='/yoga' component={YogaPage}/>
                <Route path='/shop' component={ShoppingPage}/>
                <Route path='/cart' component={()=><CartPage cart={cart} setCart={setCart} userId={userId}/>}/>
                <Route path='/orders' component={MyOrdersPage}/>
                <Route path='/test' component={TestPage}/>
            </Switch>
            <Footer/>
        </Router>
    );

}

export default App;
