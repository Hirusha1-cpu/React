import React from 'react';


function Footer(props){
    return (
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#"><span className="fa fa-home fa-lg"></span> Home</a>
                        </li>
                        <li>
                            <a href="./aboutus.html"><span className="fa fa-info fa-lg"></span> About</a>
                        </li>
                        <li>
                            <a href="./menu.html"><span className="fa fa-list fa-lg"></span> Menu</a>
                        </li>
                        <li>
                            <a href="./contact.html"><span className="fa fa-address-card fa-lg"></span> Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>no41/c/1, Kospitiana, Pugoda</address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="https://google.com"><i
                                className="fa fa-google-plus fa-lg"></i>
                        </a>
                        <a className="btn btn-social-icon btn-facebook" href="https://google.com"><i
                                className="fa fa-facebook fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://google.com"><i
                                className="fa fa-linkedin fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://google.com"><i
                                className="fa fa-twitter fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-youtube" href="https://google.com"><i
                                className="fa fa-youtube fa-lg"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>Copyright</p>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Footer;