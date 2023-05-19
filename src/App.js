import React, { Component } from "react";
//import {Navbar, NavbarBrand} from 'reactstrap'
import "./App.css";
// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     dishes: DISHES
  //   };
  // }
  // render(){
  //   return (
  //     <div>
  //      <Navbar dark color="primary">
  //         <div className='container'>
  //           <NavbarBrand href='/'>
  //             Hirusha Fernando

  //           </NavbarBrand>
  //         </div>
  //      </Navbar>
  //      <Menu dishes={this.state.dishes}/>
  //     </div>
  //   );
  // }

  render() {

    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
