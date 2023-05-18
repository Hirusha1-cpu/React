import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import {Link} from 'react-router-dom'

function Contact(props) {
  return (
    <div className="container">
         <div className="row" >
            <Breadcrumb>
            <BreadcrumbItem>
            <Link to ="/home" className="text-decoration-none">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active className="text-info">Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Contact Us</h3>
            </div>
        </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Info</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>no41/c/1, Kospitiana, Pugoda</address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map our locatio</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">
              hh
            </button>
            <button type="button" className="btn btn-primary">
              hh
            </button>
            <button type="button" className="btn btn-primary">
              hh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
