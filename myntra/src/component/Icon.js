import React, { Component } from 'react';
import { Iconbar,Icons } from './Iconsc';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Iconobject: [
                {
                    offsetX: '-603px',
                    offsetY: '-117px',
                    width: '33px',
                    height: '32px',
                    text: 'Profile',
                    id: 1
                },
                {
                    offsetX: '-650px',
                    offsetY: '-117px',
                    width: '24px',
                    height: '32px',
                    text: 'Wishlist',
                    id: 2
                },
                {
                    offsetX: '-688px',
                    offsetY: '-117px',
                    width: '33px',
                    height: '32px',
                    text: 'Bag',
                    id: 3
                },
            ]
        }
    }
    render() {
        return (
            <Iconbar>
                {
                    this.state.Iconobject.map((value,index)=>{
                    return  <li key={value.id}> <Icons userobj={this.state.Iconobject[index]}>                    
                    </Icons>
                    <span>{value.text}</span>
                    </li>
                     })
                }
            </Iconbar>
        );
    }
}
export default Icon;