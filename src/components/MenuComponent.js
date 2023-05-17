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
import DishDetails from './DishdetailComponent'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish : null
    };
    console.log('Menu Component constructor is invoked');
  }
  componentDidMount(){
    console.log('Menu Component componentDidMount is invoked');
  }


  onDishSelect(dish){
    this.setState({selectedDish:dish});
  }
  renderDish(dish){
    if(dish != null){
        return (
          <Card >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
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
  renderCmt(dish){
    if(dish != null){
        return (
          <div >
            
            <div>
                <CardTitle> <b> Comments</b> </CardTitle>
                <CardText>{dish.description}</CardText>
            </div>

          </div>
        )
    }else{
        return(
            <div></div>
        )
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-6 mt-1">
          <Card onClick={()=> this.onDishSelect(dish)}>
          {/* <Card onClick={()=> this.props.onClick(dish.id)}> */}
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log('Menu Component render is invoked');
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
            <div className="col-12 col-sm-5 mt-1">

            {this.renderDish(this.state.selectedDish)}
            </div>
            <div className="col-12 col-sm-7 mt-1">
            {this.renderCmt(this.state.selectedDish)}

            </div>
        </div>
      </div>
      
    );
  }
}

export default Menu;
