import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'
import './Doctors.css'
import Sreelekshmi from '../images/sreelekshmi.jpg'
import Leena from '../images/leena.jpg'

const Doctors = () => {
    
    return (
        <div className="doctors">
            <h3>Doctors</h3>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={Sreelekshmi} style={{height:"400px",objectFit:"cover"}} />
                    <Card.Body>
                    <Card.Title>Dr.Sreelekshmi</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Available on monday to friday</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Leena}  style={{height:"400px",objectFit:"cover"}}/>
                    <Card.Body>
                    <Card.Title>Dr.Vargheese</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Available on Saturday and Sunday</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Doctors
