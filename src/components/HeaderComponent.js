import React, { Component } from "react";
import { Navbar, NavbarBrand} from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Hirusha Fernando</NavbarBrand>
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