import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Header'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

class App extends Component {
    state = {
      counter: 0,
      // name: 'good'
    }

  incounter = (value) => {
    this.setState({
      name: value,
      counter: ++this.state.counter
    })
  }

  render() {
    return (
      <div>
        <Header counter={this.state.counter} />
        <Main counter={this.incounter} />
        <Footer/>
      </div>
    );
  }
}

export default App;
