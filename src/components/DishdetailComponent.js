import React, { Component } from "react";
import {
  Card,
  CardImag,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
} from "reactstrap";
import { DISHES } from "../shared/dishes";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish : null
    };
    console.log('Menu Component constructor is invoked');
  }


  onDishSelect(dish){
    this.setState({selectedDish:dish});
  }

  renderCmt(dish){
    if(dish != null){
        return (
          <Card >
            
            <CardBody>
                <CardTitle>Comments</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>

          </Card>
        )
    }else{
        return(
            <div></div>
        )
    }
  }

  render() {
  
    return (
      
            <div >
            {this.renderCmt(this.state.selectedDish)}

            </div>
       
      
    );
  }
}

export default DishDetails;
