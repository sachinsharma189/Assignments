import React, { Component } from 'react';
import Disheslist from './Disheslist'


class Dishes extends Component {
    render() {
        let { dishes } = this.props;
        return (
            <div>
                {dishes.map((person,i) => <Disheslist key = {i} 
                     data = {person} />)}
                <br/>
            </div>
        );
    }
}
export default Dishes;