import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <div>
      <Card onClick={()=> onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}
const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
      return (
      <div key={dish.id} className="col-12 col-md-6 mt-1">
        <RenderMenuItem dish={dish} onClick={props.onClick}/>
      </div>
      );
    });
    
    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
}

export default Menu;
