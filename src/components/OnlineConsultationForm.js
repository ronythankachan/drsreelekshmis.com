import React,{useState, useEffect} from 'react'
import './OnlineConsultationForm.css'
import { Form, Row, Col } from 'react-bootstrap'
import { Button, Toast } from 'react-bootstrap'
import {useFormik} from 'formik'
import backend from '../axios'

// var timeSlots={}
// const generateTimeSlots = (startTimeInMinutes, numberOfSlots)=>{
//     for(var i=0;i<numberOfSlots;i++){
//         timeSlots[startTimeInMinutes] =0
//         startTimeInMinutes+=30
//     }
//     return timeSlots
// }

// const timeMap = {
//     '4.00 PM':960,
//     '4.30 PM':990,
//     '5.00 PM':1020,
//     '5.30 PM':1050,
//     '6.00 PM':1080,
//     '6.30 PM':1110,
//     '7.00 PM':1140,
//     '7.30 PM':1170,
//     '8.00 PM':1200
// }

const timeMap={
    960:'4.00 PM',
    990:'4.30 PM',
    1020:'5.00 PM',
    1050:'5.30 PM',
    1080:'6.00 PM',
    1110:'6.30 PM',
    1140:'7.00 PM',
    1170:'7.30 PM',
    1200:'8.00 PM'
}

var isValid = false
const isValidZip = (zip) =>{
    backend.get('/api/zip').then(
            (response)=>{
                if(response.data.includes(zip.toString())){
                    isValid = true
                }else{
                    isValid = false
                }
            }, (error)=>{
                console.log(error)
            }
        )
    return isValid
}
const isValidDate = (date) =>{
    // Check if doctors are available in this date
    if(new Date(date)>= new Date()){
        return true
    }
    return false
}

const OnlineConsultationForm = () => {
    const [show, setShow] = useState(false);
    const [toastMsg, setToastMsg] =useState("");
    const [toastColor, setToastColor] = useState("red");


    const validate = values =>{
        const errors={}
        if(!values.appointmentType || values.appointmentType === "Choose..."){
            errors.appointmentType = 'Required field'
        }
        if(values.appointmentType==='Home'){
            if(!values.service || values.service === "Choose..."){
                errors.service = 'Required field'
            }
            if(!values.zip){
                errors.zip = 'Required field'
            }else if(!isValidZip(values.zip)){
                errors.zip = 'Sorry, our services are not availble in your area'
            }
        }
        if(values.appointmentType==='Online'){
            if(!values.date){
                errors.time = 'Select Date First'  
            }
            else if(!values.time || values.time === "Choose..."){
                errors.time = 'Required field'  
            }
        }
        if(!values.date){
            errors.date = 'Required field'
        }else if(!isValidDate(values.date)){
            errors.date = 'Cannot book appointment on this date.'
        }
        if(!values.firstName){
            errors.firstName = 'Required field'
        }else if(values.firstName.length <3){
            errors.firstName = 'First Name should be atleast 3 characters long'
        }
        if(!values.phone){
            errors.phone = 'Required field'
        }else if(!/\+?\d[\d -]{8,12}\d/.test(values.phone)){
            errors.phone = 'Invalid phone number'
        }
        if(!values.email){
            errors.email = 'Required field'
        }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
            errors.email = 'Invalid Email Address'
        }
        if(!values.age){
            errors.age = 'Required field'
        }else if(parseInt(values.age)<0 || parseInt(values.age)>120){
            errors.age= 'Age is not valid'
        }
        if(!values.address){
            errors.address = 'Required field'
        }
        if(!values.sex || values.sex === "Choose..."){
            errors.sex = 'Required field'
        }
        return errors
    }

    const formik = useFormik({
        initialValues:{
            appointmentType:'',
            date:'',
            time:'',
            service:'',
            zip:'',
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            sex:'',
            age:'',
            address:''
        },
        validate,
        onSubmit: values => {
            if(formik.values.time){
                formik.values.time=parseInt(Object.keys(timeMap).find(key=>timeMap[key]===formik.values.time))
            }
            backend.post('/api/appointments',values)
            .then(response=>{
                setToastColor("green")
                setToastMsg(response.data)
                setShow(true)
            },error=>{
                console.log(error)
            })
            formik.resetForm()
        }
    })

    const [timeSlots, setTimeSlots] =useState([])

    useEffect(() => {
        if(formik.values.date && isValidDate(formik.values.date)){
            // get the timeslots for the date and only put the valid time slots

            backend.get('api/timeSlots',{
                params:{
                    date:formik.values.date,
                    appointmentType:formik.values.appointmentType
                }
            }).then(response=>{
                var slotArr = response.data
                const timeSlots = Object.keys(timeMap).map(item=>{
                    if(!slotArr.includes(parseInt(item))){
                        return <option key={item}>{timeMap[item]}</option>
                    }else{
                        return null
                    }
                })
                setTimeSlots(timeSlots)
            },error=>{
                console.log(error)
            })

        }else{
            formik.values.time=''
            setTimeSlots([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.date])

    return (
        <div className="onlineconsultationform">
            <Form onSubmit={formik.handleSubmit} >
                <Form.Group>
                    <Form.Label>Appointment Type*</Form.Label>
                    <Form.Control as="select" name="appointmentType" value={formik.values.appointmentType} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.appointmentType && formik.errors.appointmentType}>
                        <option>Choose...</option>
                        <option>Home</option>
                        <option>Clinic</option>
                        <option>Online</option>
                    </Form.Control>
                    {formik.touched.appointmentType && formik.errors.appointmentType ? (<div className="error">{formik.errors.appointmentType}</div>) : null}
                </Form.Group>
                {
                    formik.values.appointmentType==='Home'?
                    <>
                        <Form.Group>
                            <Form.Label>Service*</Form.Label>
                            <Form.Control as="select" name="service" value={formik.values.service} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.service && formik.errors.service}>
                                <option>Choose...</option>
                                <option>Abhyanga and steam bath (Massage)</option>
                                <option>Pinda sweda/Kizhi (Heat fomentation using herbs)</option>
                                <option>Shastika shali panda sveda (SSPS)</option>
                                <option>Kati, Greeva &amp; Janu basti</option>
                                <option>Udvartanam</option>
                                <option>Dhara</option>
                                <option>Pichu</option>
                                <option>Dhara</option>
                                <option>Lepam</option>
                                <option>Vamana (Therapeutically induced vomiting)</option>
                                <option>Virechana (Therapeutically induced loose motion)</option>
                                <option>Basti (Medicated enema)</option>
                                <option>Nasya (Instillation of medicines to nose)</option>
                                <option>Rakta mokshana (Blood letting)</option>
                                <option>Post Delivery Care</option>
                            </Form.Control>
                            {formik.touched.service && formik.errors.service ? (<div className="error">{formik.errors.service}</div>) : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ZIP*</Form.Label>
                            <Form.Control type="number" placeholder="Zip Code" name="zip" value={formik.values.zip} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.zip && formik.errors.zip}/>       
                            {formik.touched.zip && formik.errors.zip ? (<div className="error">{formik.errors.zip}</div>) : null}                
                        </Form.Group>
                    </>:null
                }
                {
                    formik.values.appointmentType==='Online'?
                    <>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Select Date*</Form.Label>
                                    <Form.Control type="date" name="date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.date && formik.errors.date}/>
                                    {formik.touched.date && formik.errors.date ? (<div className="error">{formik.errors.date}</div>) : null}

                                </Col>
                                <Col>
                                    <Form.Label>Time Slot*</Form.Label>
                                    <Form.Control as="select" name="time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.time && formik.errors.time}>
                                        <option>Choose...</option>
                                        {timeSlots}
                                    </Form.Control>
                                    {formik.touched.time && formik.errors.time ? (<div className="error">{formik.errors.time}</div>) : null}
                                </Col>
                            </Row>
                        </Form.Group>
                    </>:
                    <>
                        <Form.Group>
                            <Form.Label>Select Date*</Form.Label>
                            <Form.Control type="date" name="date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.date && formik.errors.date}/>
                            {formik.touched.date && formik.errors.date ? (<div className="error">{formik.errors.date}</div>) : null}
                        </Form.Group>
                    </>
                }
                <Form.Group>
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control type="text"placeholder="First Name" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.firstName && formik.errors.firstName}/>
                    {formik.touched.firstName && formik.errors.firstName ? (<div className="error">{formik.errors.firstName}</div>) : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone*</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.phone && formik.errors.phone}/>
                    {formik.touched.phone && formik.errors.phone ? (<div className="error">{formik.errors.phone}</div>) : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="text" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.email && formik.errors.email}/>
                    {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Sex*</Form.Label>
                            <Form.Control as="select" name="sex" value={formik.values.sex} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.sex && formik.errors.sex}>
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </Form.Control>
                            {formik.touched.sex && formik.errors.sex ? (<div className="error">{formik.errors.sex}</div>) : null}
                        </Col>
                        <Col>
                            <Form.Label>Age*</Form.Label>
                            <Form.Control type="number" placeholder="Age" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.age && formik.errors.age}/>
                            {formik.touched.age && formik.errors.age ? (<div className="error">{formik.errors.age}</div>) : null}
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address*</Form.Label>
                    <Form.Control as="textarea" rows={3} id="address" placeholder="Address with ZIP Code" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.address && formik.errors.address}/>
                    {formik.touched.address && formik.errors.address ? (<div className="error">{formik.errors.address}</div>) : null}
                </Form.Group>
                <Button type="submit">Book Appointment</Button>
            </Form>
            <div style={{position: 'fixed',bottom: 0,right: 0,margin:"30px",zIndex:"999"}}>
                    <Toast variant="primary" onClose={() => setShow(false)} show={show} delay={3000} style={{color:"white",backgroundColor:toastColor, borderRadius:"12px"}}>
                        <Toast.Header style={{fontSize:"1rem", color:"white",backgroundColor:toastColor,borderRadius:"12px"}}>
                            <strong className="mr-auto">Appointment Booking</strong>
                            <small >Just now</small>
                        </Toast.Header>
                        <Toast.Body style={{fontSize:"1rem"}}>{toastMsg}</Toast.Body>
                    </Toast>
                </div>
        </div>
    )
}

export default OnlineConsultationForm
