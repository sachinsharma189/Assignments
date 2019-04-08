import React, { Component } from 'react';
import Header from './component/Header';
import Card from './component/Card/Card';
import './component/Reset.css';
import './App.css';
import Carousel from './component/Caraousel/Carousel';
import BrandsComponent from './component/Brands/BrandsComponent';
import OfferCarouselComponent from './component/OfferCarouselComponent/OfferCarouselComponent';
import Brandheader from './component/Brandcomponentheader/Brandheader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carousel/>
        <Card/>
        <OfferCarouselComponent/>
        <Brandheader/>
        <BrandsComponent/>
      </div>
    );
  }
}

export default App;
