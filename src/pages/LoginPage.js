import React,{useState} from 'react'
import './LoginPage.css'

const Loginpage = () => {
    const [signUp, setSignUp] = useState(true)
    return (
        <div className="loginpage">
            <div className="loginpage__container">
                <div className="loginpage__info">
                    <div className="loginpage__info__content">
                        <button onClick={()=>setSignUp(true)}>Sign up</button>
                        <small>Sign up to order medicines, view your booking history and manage your orders</small>
                    </div>
                    <div className="loginpage__info___loginbtn">
                        <small style={{opacity:0.7}}>Have an account?</small>
                        <button onClick={()=>setSignUp(false)}>Login</button>
                    </div>
                </div>
                <div className="loginpage__form">
                    {
                        signUp ? <p>Sign UP</p> : <p>Login</p>
                    }
                    {/* test2 */}
                </div>
            </div>
        </div>
    )
}
export default Loginpage