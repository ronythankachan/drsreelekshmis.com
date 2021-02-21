import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import ClinicIcon from '../images/clinic_icon.png'


const Location = ({ text }) => {

    return <div className="marker">
        <img style={{width:"40px", height:"40px"}} src={ClinicIcon} alt="Sreelekshmi clinic"/>
        <p>SREELEKSHMI CLINIC</p>
    </div>
}

const Map = () => {
    return (
        <div className="map">
                    <h3>Contact US</h3>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDrDWBgOlbkXARFnBVIOUWewKw7-_bSDRg" }}
                        defaultCenter={{lat:13.021528534998994,lng:77.59238548810548}}
                        defaultZoom={18}
                        >
                        <Location
                            lat={13.021528534998994}
                            lng={77.59238548810548}
                            text="Dr.Sreelekshmi Clinic"
                        />
                    </GoogleMapReact>
        </div>
    )
}

export default Map
