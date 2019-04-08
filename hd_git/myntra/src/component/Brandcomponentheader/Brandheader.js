import React, { Component } from 'react';
import { Header,Description } from './style';

class Brandheader extends Component {
  render() {
    return (
      <div className="App">
       <Header>
           Brand in Focus
       </Header>
       <br/><br/>
       <Description>
           Show some brand love
       </Description>
       <br/> <br/>
      </div>
    );
  }
}

export default Brandheader;