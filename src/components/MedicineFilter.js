import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const MedicineFilter = () => {
    const [category,setCategory] =useState("")

    const handleChange = (event) =>{
        if(event.target.value !== "Choose..."){
            setCategory(event.target.value)
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(category)
        document.getElementById("medicinefilter").reset();
    }

    return (
        <div style={{padding:"30px"}}>
            <Form onSubmit={handleSubmit} id="medicinefilter">
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
                <Button type="submit">Apply</Button>
            </Form>
            
        </div>
    )
}

export default MedicineFilter
