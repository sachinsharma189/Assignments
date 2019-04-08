import React, { Component } from 'react';
import {Li ,Ul} from './Navbarsc.js'

class Navbar extends Component{
    render(){
        return(
                <Ul>
                    <Li>men</Li>
                    <Li>women</Li>
                    <Li>kids</Li>
                    <Li>home &amp; living</Li>
                    <Li>discover</Li>
                </Ul>
        );
    }
}
export default Navbar;