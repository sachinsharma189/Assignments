import React, { Component} from 'react';
import './Header.css';

class Header extends Component{
    render(){

        let {counter} =this.props;
        return(
            <header>
                Head Section
                <strong> Counter </strong>
                {
                    counter
                }
            </header>
        );
    }
}

export default Header;