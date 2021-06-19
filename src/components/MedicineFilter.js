import React from 'react'
import { Form } from 'react-bootstrap'

const MedicineFilter = ({setCategory}) => {

    const handleChange = (event) =>{
        if(event.target.value !== "Choose...") setCategory(' '+event.target.value)
        else setCategory('')
    }

    return (
        <div style={{padding:"30px"}}>
            <Form id="medicinefilter">
                <Form.Group>
                    <Form.Label style={{fontWeight:"bold", marginLeft:"5px"}}>Category</Form.Label>
                    <Form.Control as="select" name="category" onChange={handleChange}>
                        <option>Choose...</option>
                        <option>Arishtam</option>
                        <option>Choornam</option>
                        <option>Ghritam</option>
                        <option>Gulika, Capsules and Tablets</option>
                        <option>Taila and Kuzhampu</option>
                        <option>Kashayam and Kashayam tablets</option>
                        <option>Lehyam and Rasayanam</option>
                        <option>Organic products</option>
                        <option>Creams, soaps and facepacks</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            
        </div>
    )
}

export default MedicineFilter
