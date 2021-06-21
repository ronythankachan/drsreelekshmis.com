import {Button , Accordion, Card} from 'react-bootstrap'
import React,{useEffect,useState} from 'react'
import backend from '../axios'
import './CheckoutPage.css'
import { Form, Row,Col} from 'react-bootstrap'
import { useFormik } from 'formik'

const CheckoutPage = (props) => {
    const placeOrder = ()=>{
        alert("Order placed successfully")
    }
    return (
        <div className="checkoutpage">
            <Accordion defaultActiveKey="0" style={{margin:"30px 10px"}}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" style={{width:"800px"}}>Select a delivery address</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <AddressList/>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" style={{width:"800px"}}>Add a new address</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <NewAddress/>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" style={{width:"800px"}}>Select Payment method</Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Payment/>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <div className="summary">
                <h3 className="subheading">Summary</h3>
                <div className="cartinvoice__item">
                <p>Amount</p>
                <p>Rs. {props.location?.state?.total}</p>
            </div>
            <div className="cartinvoice__item">
                <p>Delivery</p>
                <p>Rs. {props.location?.state?.delivery}</p>
            </div>
            <div className="cartinvoice__item">
                <h4>Sub-total</h4>
                <h4>Rs. {props.location?.state?.total+props.location?.state?.delivery}</h4>
            </div>
            <div className="checkout__btn">
                <Button variant="success" onClick={placeOrder}>Place Order</Button>
            </div>
            </div>
        </div>
    )
}

export default CheckoutPage

const AddressList = ()=>{
    const [addressList,setAddressList] = useState([])
    const [updater,setUpdater] =  useState(false);

    useEffect(() => {
        async function getAddress(){
           const response = await backend.get('/api/get_address',{params:{userId:localStorage.getItem('userId')}})
           setAddressList(response.data)
        }
        getAddress()
        return (
            ()=>{
                setAddressList([])
            }
        )
    }, [updater])

    const addresses = addressList.map((item,index) =>{
       return <AddressCard data={item} setUpdater={setUpdater} key={index}/>
    })

    return(
        <div className="addresses">
            {addresses}
        </div>
    )
}
const AddressCard = ({data,setUpdater})=>{
    const handleEdit = (e)=>{

    }
    async function handleDelete(){
        const response = await backend.post('/api/delete_address',{userId:localStorage.getItem('userId'),_id:data._id})
        setUpdater(current => !current)
        console.log(response.data)
    }

    return (
        <div className="addresscard">
            <p>{data.firstName+' '+data.lastName}</p>
            <p>{data.addressLine1}</p>
            <p>{data.addressLine2}</p>
            <p>{data.city+', '+data.state}</p>
            <p>{data.zip+', Ph:'+data.phone}</p>
            <div className="addresscard__buttons">
                <Button variant="success">Deliver to this address</Button>
                <div style={{display:'flex',columnGap:"10px"}}>
                    <Button variant="warning" style={{width:"50%"}} onClick={handleEdit}>Edit</Button>
                    <Button variant="danger" style={{width:"50%"}} onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

const NewAddress = ()=>{
    const validate = values =>{

    }
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            phone:'',
            zip:'',
            addressLine1:'',
            addressLine2:'',
            city:'',
            state:'',
            landMark:''
        },
        validate,
        onSubmit:values =>{

        }
    })

    return(
       <Form onSubmit={formik.handleSubmit}>
           <Form.Group>
               <Row>
                   <Col>
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange}/>
                   </Col>
                   <Col>
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange}/>
                   </Col>
               </Row>
           </Form.Group>
           <Form.Group>
               <Row>
                   <Col>
                        <Form.Label>Phone*</Form.Label>
                        <Form.Control type="number" name="phone" placeholder="Mobile Number" value={formik.values.phone} onChange={formik.handleChange}/>
                   </Col>
                   <Col>
                        <Form.Label>Pin Code*</Form.Label>
                        <Form.Control type="number" name="zip" placeholder="Pin Code" value={formik.values.zip} onChange={formik.handleChange}/>
                   </Col>
               </Row>
           </Form.Group>
           <Form.Group>
               <Form.Label>Flat, House no.,Building, Company, Apartment*</Form.Label>
               <Form.Control type="text" placeholder="Address Line 1" name="addressLine1" value={formik.values.addressLine1} onChange={formik.handleChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Area, Colony, Street, Sector, Village</Form.Label>
               <Form.Control type="text" placeholder="Address Line 2" name="addressLine2" value={formik.values.addressLine2} onChange={formik.handleChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>LandMark</Form.Label>
               <Form.Control type="text" placeholder="Eg: Near PVR Cinemas" name="landMark" value={formik.values.landMark} onChange={formik.handleChange}/>
           </Form.Group>
           <Form.Group>
               <Row>
                   <Col>
                        <Form.Label>Town/City*</Form.Label>
                        <Form.Control type="text" placeholder="Eg:Kochi" name="city" value={formik.values.city} onChange={formik.handleChange}/>
                   </Col>
                   <Col>
                    <Form.Label>State*</Form.Label>
                    <Form.Control as="select" title="Choose..." name="state" value={formik.values.state} onChange={formik.handleChange}>
                        <option>Kerala</option>
                        <option>TamilNadu</option>
                        <option>Karnataka</option>
                        <option>Mumbai</option>
                    </Form.Control>
                   </Col>
               </Row>
           </Form.Group>     
           <Form.Group>
                <Form.Label>Delivery Instructions</Form.Label>
                <Form.Control as="textarea" rows={3} /> 
            </Form.Group>     
            <Button variant="success" type="submit">Add Address</Button> 
       </Form>
    )
}
const Payment = () =>{
    return (
        <Form>
            <Form.Group>
                <Form.Check type="radio" label="COD (Cash on Delivery)" defaultChecked/>
                <small>Please pay at the time of the delivery in cash.</small>
                <Form.Check type="radio" label="UPI" disabled/>
                <small>Pay using Google pay, Phone pe, Paytm or any other UPI services.</small>
                <Form.Check type="radio" label="Credit/ Debit Cards" disabled/>
                <small>Pay using any credit/debit cards</small>
            </Form.Group>
        </Form>
    )
}