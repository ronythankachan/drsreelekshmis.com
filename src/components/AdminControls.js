import React,{useState} from 'react'
import { Accordion, Card } from 'react-bootstrap'
import Filters from './Filters'
import AddUser from './AddUser'
import DateControl from './DateControl'
import ZipControl from './ZipControl'

const AdminControls = ({}) => {
    const [filterValues, setFilterValues] = useState({});
    return (
        <div>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">Filters</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Filters setFilterValues={setFilterValues}/>  
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">Add User</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <AddUser/>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">Manage Dates</Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <DateControl/>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">Manage Zip</Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <ZipControl/>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </div>
    )
}

export default AdminControls
