import React,{useState} from 'react'
import './Login.css'
import {Form, Spinner} from 'react-bootstrap'
import { useFormik } from 'formik'
import { CgArrowLongRight } from 'react-icons/cg';
import { useHistory } from "react-router-dom";
import backend from '../axios'

const Login = ({url="/"}) => {
    let history = useHistory()
    const [loginClicked,setLoginClicked] =useState(false)
    const [msg, setMsg]=useState('')
    const [msgClass, setMsgClass] =useState('login__msg')
    const validate = values =>{
        const errors = {}
        if(!values.email){
            errors.email='E-mail is required'
        }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
            errors.email = 'Invalid E-mail Address'
        }
        if(!values.password){
            errors.password = 'Enter password'
        }
        return errors
    }

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit: values =>{
            setMsgClass("login__msg")
            setMsg('')
            setLoginClicked(true)
            backend.post('/api/login',values)
            .then(response=>{
                setMsgClass("login__msg login__success")
                setMsg("Logged in successfully")
                localStorage.setItem("userId",response.data.userId)
                localStorage.setItem("userType",response.data.userType)
                setTimeout(() => {
                    history.push(url)
                }, 2000);
            },error=>{
                setMsgClass("login__msg login__error")
                setMsg(error.response.data)
            })
            .finally(()=>{
                setLoginClicked(false)
            })
            formik.resetForm()
            console.log(formik.errors)
        }
    })
    const forgotPass = ()=>{
        if(formik.values.email && !formik.errors.email) alert("E-mail to reset password sent")
        else if(!formik.values.email) alert("Provide an email address")
        else alert(formik.errors.email)
    }

    const loginText = () =>{
        return loginClicked ?  <div style={{display:"flex",alignItems:"center"}}><Spinner animation="border" size="sm" style={{marginRight:"10px"}}/>Logging in...</div>:<div className="logintxt">Login <CgArrowLongRight/></div>
    }
    return (
        <div className="login">
            <div className="login__title">
                <h3>Dr. Sreelekshmi's</h3>
                <small>Ayurveda care center</small>
            </div>
            <div className={msgClass}>
                <p>{msg}</p>
            </div>
            <Form className="form__width" onSubmit={formik.handleSubmit}>
                <Form.Group style={{height:"50px"}}>
                    <Form.Control type="text" placeholder="E-mail" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.email && formik.errors.email}/>
                    {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}                
                </Form.Group>
                <Form.Group style={{height:"50px"}}>
                    <Form.Control type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.password && formik.errors.password}/>
                    {formik.touched.password && formik.errors.password ? (<div className="error">{formik.errors.password}</div>) : null}                
                </Form.Group>
                <div className="login__buttons">
                    <button className="forgot" onClick={forgotPass} type="button">Forgot password?</button>
                    <button className="submit" type="submit">{loginText()}</button>
                </div>
            </Form>
        </div>
    )
}

export default Login
