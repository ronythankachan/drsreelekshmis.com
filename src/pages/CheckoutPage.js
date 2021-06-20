import { Button } from 'react-bootstrap'
import React,{useEffect,useState} from 'react'
import backend from '../axios'
import './CheckoutPage.css'
import { Form, Row,Col} from 'react-bootstrap'
import { Formik, useFormik } from 'formik'

const CheckoutPage = () => {
    return (
        <div className="checkoutpage">
            
        <div className="checkout">
            <h3 className="subheading">Select a delivery address</h3>
            <AddressList/>
            <h3 className="subheading">Add a new address</h3>
            <NewAddress/>
        </div>
            {/* payment method
            total amount on side
            checkout
            confirmation  */}
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
        },
        validate,
        onSubmit:values =>{

        }
    })

    return(
       <Form>
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
               <Form.Label>Flat, House no.,Building, Company, Apartment</Form.Label>
               <Form.Control type="text" placeholder="Address Line 1"/>
           </Form.Group>
           
       </Form>
    )
}