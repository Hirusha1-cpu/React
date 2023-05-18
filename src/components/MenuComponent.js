import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';

function RenderMenuItem({ dish, onClick }) {
  return (
    <div>
      <Card>
        <Link to ={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        </Link>
      </Card>
    </div>
  );
}
const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
      return (
      <div key={dish.id} className="col-12 col-md-6 mt-1">
        <RenderMenuItem dish={dish} />
      </div>
      );
    });
    
    return (
      <div className="container">
        <div className="row" >
            <Breadcrumb>
            <BreadcrumbItem>
            <Link to ="/home" className="text-decoration-none">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active className="text-info">Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
            </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
}

export default Menu;
