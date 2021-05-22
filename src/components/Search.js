import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import './Search.css'
import { RiSearchLine } from "react-icons/ri";
import { useState } from 'react';
const Search = () => {

    const [query,setQuery] = useState("")

    const handleChange = (event) =>{
        setQuery(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(query)
        document.getElementById("search").reset();
    }
    return (
        <div className="search">
            <Form onSubmit={handleSubmit} id="search">
                <InputGroup>
                    <RiSearchLine style={{fontSize:"1.2rem", color:"gray"}}/>
                    <Form.Control type="text" placeholder="Search for products.." onChange={handleChange}/>
                    <button type="submit" style={{display:"none"}}>Search</button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default Search
