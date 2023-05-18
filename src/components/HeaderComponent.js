import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Jumbotron,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
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
                  <a href="/home"><span className="fa fa-home fa-lg"></span> Home</a>
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
      </React.Fragment>
    );
  }
}

export default Header;
