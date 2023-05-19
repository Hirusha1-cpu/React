import React,{Component} from "react";
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Input, Col, Row,Label } from "reactstrap";
import {Control, LocalForm, Errors} from 'react-redux-form'

import {Link} from 'react-router-dom'

class Contact extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     firstname: '',
        //     lastname:'',
        //     telnum:'',
        //     email:'',
        //     agree: false,
        //     contactType: 'Tel',
        //     message: '',
        //     touched:{
        //         firstname: false,
        //         lastname: false,
        //         telnum: false,
        //         email: false,
                
        //     }
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);

    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

    }
    handleSubmit(values){
        console.log("Current state" + JSON.stringify(values))
        alert("Current state" + JSON.stringify(values));
      
    }

    // handleBlur = (field) => (evt)=>{
    //     this.setState({
    //         touched:{...this.state.touched, [field]:true}
    //     });
    // }

    // validate(firstname, lastname, telnum, email){
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };
    //     if(this.state.touched.firstname && firstname.length<3)
    //         errors.firstname = 'First name must be at least 3 characters';
    //     else if(this.state.touched.firstname && firstname.length>10)  
    //         errors.firstname = 'First name must be at less than 10 characters';  
    //     if(this.state.touched.lastname && lastname.length<3)
    //         errors.lastname = 'last name must be at least 3 characters';
    //     else if(this.state.touched.lastname && lastname.length>10)  
    //         errors.lastname = 'last name must be at less than 10 characters';  

    //     const reg = /^\d+$/;
    //     if(this.state.touched.telnum &&!reg.test(telnum))
    //         errors.telnum = 'Please enter only digits';  

    //     if(this.state.touched.email && email.split('').filter(x => x === "@").length !== 1)
    //         errors.email = 'not valid email';

    //     return errors;    
    // }

    render(){
   //     const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
       
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
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text model='.firstname' name="firstname" id="firstname" placeholder="First Name" 
                               
                                className="form-control"/>
                             
                            </Col>

                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Control.text model='.lastname' name="lastname" id="lastname" placeholder="Last Name" 
                               
                                className="form-control"
                                />
                          
                            </Col>

                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Tel number</Label>
                            <Col md={10}>
                                <Control.text model='.telnum' name="telnum" id="telnum" placeholder="Tel number" 
                         
                                className="form-control"/>
                            
                             
                            </Col>

                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email" name="email" id="email" placeholder="Email" 
                               className="form-control"
                               />
                           
                            </Col>

                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 6, offset:2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" 
                                        className="form-check-input"
                                        name="agree" 
                                        />
                                     
                                        {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size: 3, offset:1}}>
                                <Control.select model=".contactType" name="contactType" className="form-control"
                                >
                                    <option>Tel.</option>
                                    <option>Email.</option>
                                </Control.select>
                            </Col>

                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Control.textarea  model=".message" rows="8" name="message" id="message" placeholder="Feedback" 
                               className="form-control"
                               />
                            </Col>

                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>

                        </Row>
                    </LocalForm>
                </div>
            </div>
          </div>
        );
    }
}

export default Contact;
