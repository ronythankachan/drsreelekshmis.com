import React from 'react'
import './ClinicInfo.css'
import {Badge} from 'react-bootstrap'

const ClinicInfo = () => {
    return (
        <div className="clinicinfo">
            <h6>
                <Badge variant="primary" style={{margin:"10px"}}>Address</Badge> 
                First floor, Maruthi complex, SFS 407, 4t phase, Yelahanka New town, Bangalore 560064
            </h6> 
            <h6>
                <Badge variant="danger" style={{margin:"10px"}}>Phone</Badge> 
                +919847532286
            </h6> 
        </div>
    )
}

export default ClinicInfo
