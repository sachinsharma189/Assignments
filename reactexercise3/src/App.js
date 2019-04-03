import React, { Component } from 'react';
import './App.css';
import Dishes from './component/Dishes';
import Form from './component/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dishtype :[
        {
          name: "Pizza",
          price: 200
        },
        {
          name: "Burger",
          price: 100
        },
        {
          name: "FrenchFries",
          price: 200
        }
      ]
    }
  }
  addFormData = (event,dish) =>{
    event.preventDefault();

    let newFishes = this.state.Dishtype
    newFishes.push(dish);
    this.setState({
      Dishtype:newFishes
    })
  }
  render() {
    return (
      <div className="App">
        <Dishes dishes={this.state.Dishtype} />
        <Form handleAddDish={this.addFormData}/>
      </div>
    );
  }
}

export default App;
