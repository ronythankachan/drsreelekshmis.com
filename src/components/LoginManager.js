import React,{useState, useEffect} from 'react'
import AdminPage from '../pages/AdminPage'
import MyAccountPage from '../pages/MyAccountPage'
import CartPage from '../pages/CartPage'
import  { Redirect } from 'react-router-dom'

const isValidUser =(userData)=>{
    console.log("user data in login manager",userData)
    if(userData.userId && userData.userType){
        return true
    }else{
        return false
    }
}
const userData = {
    userId:localStorage.getItem("userId"),
    userType:localStorage.getItem('userType')
}

const LoginManager = (props) => {
    const isLoggedIn = isValidUser(userData)
    console.log("is logged in ", isLoggedIn)
    let url = window.location.pathname
    console.log(url)
    if(isLoggedIn){
        if(url==="/account"){
            if(userData.userType === "admin") return <AdminPage/>
            else if(userData.userType === "client") return <MyAccountPage/>
        }else if(url === "/cart"){
            if(userData.userType==="admin") return <AdminPage/>
            else if(userData.userType === "client") return <CartPage userData={userData} cart={props.cart} setCart={props.setCart}/>
        }else if(url === "/login"){
            return <Redirect to="/"/>
        }
    }else{
        return <Redirect to={{
            pathname:'/login',
            state:{
                redirect_uri:url
            }
        }}/>
    }
    return (
        <div>
            <p>404 ERRROR - page not found</p>
        </div>
    )
}

export default LoginManager
