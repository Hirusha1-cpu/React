import React,{Component} from "react";
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from "reactstrap";

import {Link} from 'react-router-dom'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname:'',
            telnum:'',
            email:'',
            agree: false,
            contactType: 'Tel',
            message: '',
            touched:{
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

    }
    handleSubmit(event){
        console.log("Current state" + JSON.stringify(this.state))
        alert("Current state" + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]:true}
        });
    }

    validate(firstname, lastname, telnum, email){
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
        if(this.state.touched.firstname && firstname.length<3)
            errors.firstname = 'First name must be at least 3 characters';
        else if(this.state.touched.firstname && firstname.length>10)  
            errors.firstname = 'First name must be at less than 10 characters';  
        if(this.state.touched.lastname && lastname.length<3)
            errors.lastname = 'last name must be at least 3 characters';
        else if(this.state.touched.lastname && lastname.length>10)  
            errors.lastname = 'last name must be at less than 10 characters';  

        const reg = /^\d+$/;
        if(this.state.touched.telnum &&!reg.test(telnum))
            errors.telnum = 'Please enter only digits';  

        if(this.state.touched.email && email.split('').filter(x => x === "@").length !== 1)
            errors.email = 'not valid email';

        return errors;    
    }

    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
       
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
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" name="firstname" id="firstname" placeholder="First Name" 
                                value={this.state.firstname}
                                valid ={this.state.firstname === ""}
                                invalid = {errors.firstname !== ''}
                                onBlur={this.handleBlur('firstname')}
                                onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" name="lastname" id="lastname" placeholder="Last Name" 
                                value={this.state.lastname}
                                valid ={this.state.lastname === ""}
                                invalid = {errors.lastname !== ''}
                                onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Tel number</Label>
                            <Col md={10}>
                                <Input type="tel" name="telnum" id="telnum" placeholder="Tel number" 
                                value={this.state.telnum} 
                                valid ={this.state.telnum === ""}
                                invalid = {errors.telnum !== ''}
                                onBlur={this.handleBlur('telnum')}
                                onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" name="email" id="email" placeholder="Email" 
                                value={this.state.email}
                                valid ={this.state.email === ""}
                                invalid = {errors.email !== ''}
                                onBlur={this.handleBlur('email')}
                                onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 6, offset:2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" id="agree" checked={this.state.agree}
                                        onChange={this.handleInputChange}/>
                                     
                                        {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset:1}}>
                                <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email.</option>
                                </Input>
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input  type="textarea" rows="8" name="message" id="message" placeholder="Feedback" 
                                value={this.state.feedback}
                                onChange={this.handleInputChange} />
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>

                        </FormGroup>
                    </Form>
                </div>
            </div>
          </div>
        );
    }
}

export default Contact;
