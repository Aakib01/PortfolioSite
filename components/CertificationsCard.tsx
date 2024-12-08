import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { CertificationType } from "../types/sections";
import Fade from "react-reveal/Fade";


const CertificationsCard = ({
  certificationName,
  organization,
  year
}: CertificationType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4" >
      <CardBody>
        <div className="d-flex px-3 ">
          <div className="pl-1">
            <h5 className="text-info">{certificationName}</h5>
            <h6>{organization}</h6>
            <Badge color="info" className="mr-1">
              {year}
            </Badge>            
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CertificationsCard;
