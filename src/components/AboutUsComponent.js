import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { Link } from "react-router-dom";
import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";



const Contact = (props) => {
  const contact = (props) => {
    return (
      <div className="col-12 col-md-6 mt-1">
        <div>
          <Card>
        
              <CardImg width="100%" />
              <CardImgOverlay>
                <CardTitle></CardTitle>
              </CardImgOverlay>
      
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home" className="text-decoration-none">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active className="text-info">
            Contact Us
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="row row-content">{contact}</div>
    </div>
  );
};

export default Contact;
