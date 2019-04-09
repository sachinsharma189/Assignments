import React, { Component } from 'react';
import {Searchbarbox} from './Searchbarsc';

class Searchbar extends Component{
    render() {
        return (
            <Searchbarbox>
                <span> </span>
                <input type ='textbox' placeholder='Search for Products, Brands and more'></input>
            </Searchbarbox>
        );
    }
}
export default Searchbar;
