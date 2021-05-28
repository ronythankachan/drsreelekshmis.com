import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';
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
import BookAppointmentPage from './pages/BookAppointmentPage';
import Loginpage from './pages/LoginPage';
import MyAccountPage from './pages/MyAccountPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import { createContext } from 'react';
import backend from './axios'


export const UserContext = createContext()
function App() {
    // fetch cart data and store it in state. when cart changes, fetch it from db
    const [cart, setCart] = useState([])
    const [user,setUser] =useState(()=>{
        let userId= localStorage.getItem("userId")
        var userType = localStorage.getItem("userType") 
        if(userId && userType) return {userId,userType}
        else return null
    })
    const [isOpen,setIsOpen] =useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        let userId= localStorage.getItem("userId")
        var userType = localStorage.getItem("userType")
        if(userId && userType) {
            setUser({userId,userType})
            backend.post('/api/get_cart_items',{userId:userId})
            .then((response)=>{
                setCart(response.data)
            },(error)=>{
                console.log(error)
            })
        }
    }, [])

    useEffect(()=>{
        if(user) {
            backend.post('/api/get_cart_items',{userId:user.userId})
            .then((response)=>{
                setCart(response.data)
            },(error)=>{
                console.log(error)
            })
        }
    },[user])
    return (
        <Router>
            <Navbar toggle={toggle} cartCount={cart.length} user={user} setUser={setUser} setCart={setCart}/>
            <Sidebar isOpen={isOpen} toggle={toggle} cartCount={cart.length} />
            <ScrollToTop/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route path='/book_appointment' component={BookAppointmentPage}/>
                <Route path='/appointments' component={AdminPanel}/>
                <Route path='/rejuvenation' component={RejuvenationPage}/>
                <Route path='/panchakarma' component={PanchakarmaPage}/>
                <Route path='/marma_therapy' component={MarmaTherapyPage}/>
                <Route path='/post_delivery_care' component={PostDeliveryCarePage}/>
                <Route path='/swarna_prashana' component={SwarnaPrashanaPage}/>
                <Route path='/yoga' component={YogaPage}/>
                <Route path='/shop' component={ShoppingPage}/>
                <UserContext.Provider value={{user,setUser,cart,setCart}}>
                    <Route path="/login" component={Loginpage}/>
                    <Route path="/account" component={()=>{
                        if(user){
                            if(user.userType === "admin") return <AdminPage/>
                            else if(user.userType === "client") return <MyAccountPage/>
                            else return <Redirect to ={{pathname:"/login",state:{redirectUri:"/account"}}}/>
                        }
                        else return <Redirect to ={{pathname:"/login",state:{redirectUri:"/account"}}}/>
                    }}/>
                    <Route path="/cart" component={()=>{
                        if(user) return <CartPage/>
                        else return <Redirect to ={{pathname:"/login",state:{redirectUri:"/cart"}}}/>
                    }}/>
                </UserContext.Provider>
            </Switch>
            <Footer/>
        </Router>
    );

}

export default App;
