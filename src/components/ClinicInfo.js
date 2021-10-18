import React from "react";
import "./ClinicInfo.css";
import { Badge } from "react-bootstrap";

const ClinicInfo = () => {
  return (
    <div className="clinicinfo">
      <div className="info__item">
        <Badge variant="primary" className="badge">
          Address
        </Badge>
        <p>
          {" "}
          House No 244 SFS 407, 1st Main Rd, 4th Phase, Yelahanka New Town,
          Bengaluru, Karnataka - 560064
        </p>
      </div>
      <div className="info__item">
        <Badge variant="danger" className="badge">
          Phone
        </Badge>
        <p> +91 97404 76241</p>
      </div>
      <div className="info__item">
        <Badge variant="dark" className="badge">
          Email
        </Badge>
        <p> drsreelekshmisclinic@gmail.com</p>
      </div>
    </div>
  );
};

export default ClinicInfo;
