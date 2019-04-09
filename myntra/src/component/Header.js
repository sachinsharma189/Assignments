import React, { Component } from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Icon from './Icon';
import {Logo} from './Logo.js';
import {Headerstyle} from './Headersc.js';


class Header extends Component {
    render() {
        return (
            <Headerstyle>
                <Logo/>
                <Navbar/>
                <Searchbar/>
                <Icon/>
            </Headerstyle>
        );
    }
}

export default Header;