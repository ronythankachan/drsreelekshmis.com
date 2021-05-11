import React,{useState} from 'react'
import './LoginPage.css'

const Loginpage = () => {
    const [signUp, setSignUp] = useState(true)
    return (
        <div className="loginpage">
            <div className="loginpage__container">
                <div className="loginpage__info">
                    <div className="loginpage__info__content">
                        <h2>Sign up</h2>
                        <small>Sign up to order medicines, view your booking history and manage your orders</small>
                    </div>
                    <div className="loginpage__info___loginbtn">
                        <small style={{opacity:0.7}}>Have an account?</small>
                        <button>Login</button>
                    </div>
                </div>
                <div className="loginpage__form">
                    {/* test2 */}
                </div>
            </div>
        </div>
    )
}
export default Loginpage