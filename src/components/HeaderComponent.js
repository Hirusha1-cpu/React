import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Jumbotron,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      
    });
  }
  toggleModal(){
    this.setState({
        isModalOpen: !this.state.isModalOpen,
        
      });
  }
  handleLogin(event){
    this.toggleModal();
    alert("Username: " + this.username.value + ", Password: " + this.password.value + "RememberMe: " + this.remember.checked);
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              Hirush Fernando
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <a href="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </a>
                  {/* <NavLink  className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>
                    Home
                  </NavLink>
                   */}
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span>
                    AboutUs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a href="/Menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </a>
                  {/* <NavLink className="nav-link" to="/Menu">
                        <span className="fa fa-list fa-lg"></span>
                      Menu
                    </NavLink> */}
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address fa-lg"></span>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar >
                <NavItem>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-user fa-lg"></span>  Login
                    </Button>
                    </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="bg-secondary">
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-12">
                <h1 className="display-4">Hirusha Fernando</h1>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.hanleLogin}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        
                        <Input type="text" id="username" name="username" placeholder="Enter username" autoComplete="username" 
                        innerRef={(input)=> this.username = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">password</Label>
                        <Input type="password" id="password" name="password" placeholder="Enter password" 
                        innerRef={(input)=> this.password = input} />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name= "remember" innerRef={(input)=> this.remember = input} />
                            Remember me
                        </Label>

                    </FormGroup>
                    <Button type="submit" value="submit" className="primary">Login</Button>
                </Form>

            </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
