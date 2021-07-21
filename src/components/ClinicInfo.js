import React from 'react'
import './ClinicInfo.css'
import {Badge} from 'react-bootstrap'

const ClinicInfo = () => {
    return (
        <div className="clinicinfo">
            <div className="info__item">
                <Badge variant="primary" className="badge">Address</Badge> 
                <p> First floor, Maruthi complex, SFS 407, 4th phase, Yelahanka New town, Bangalore 560064</p>
            </div>
            <div className="info__item">
                <Badge variant="danger" className="badge">Phone</Badge> 
                <p> +91 97404 76241</p>
            </div>
            <div className="info__item">
                <Badge variant="dark" className="badge">Email</Badge> 
                <p> drsreelekshmisclinic@gmail.com</p>
            </div>
        </div>
    )
}

export default ClinicInfo
