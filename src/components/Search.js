import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import './Search.css'
import { RiSearchLine } from "react-icons/ri";
const Search = ({setQuery}) => {
    const handleChange = (event) =>{
        setQuery(event.target.value)
    }
    return (
        <div className="search">
            <Form id="search">
                <InputGroup>
                    <RiSearchLine style={{fontSize:"1.2rem", color:"gray"}}/>
                    <Form.Control type="text" placeholder="Search for products.." onChange={handleChange}/>
                </InputGroup>
            </Form>
        </div>
    )
}

export default Search
