import React from 'react'
import AdminPage from '../pages/AdminPage'
import MyAccountPage from '../pages/MyAccountPage'
import CartPage from '../pages/CartPage'
import  { Redirect } from 'react-router-dom'

const isValidUser =(userData)=>{
    console.log("Checking if valid user",userData)
    if(userData.userId && userData.userType) return true
    else return false
}
const LoginManager = (props) => {
    const isLoggedIn = isValidUser(props.userData)
    let url = window.location.pathname
    console.log(url)
    if(isLoggedIn){
        if(url==="/account"){
            if(props.userData.userType === "admin") return <AdminPage/>
            else if(props.userData.userType === "client") return <MyAccountPage/>
        }else if(url === "/cart"){
            if(props.userData.userType==="admin") return <AdminPage/>
            else if(props.userData.userType === "client") return <CartPage userData={props.userData} cart={props.cart} setCart={props.setCart}/>
        }
    }else{
        return <Redirect to='/login'/>
    }
    return (
        <div>
            <p>404 ERRROR - page not found</p>
        </div>
    )
}

export default LoginManager
