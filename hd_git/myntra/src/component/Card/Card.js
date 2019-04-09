import React, { Component } from 'react';
import images from '../../images.json';
import { Deal, Deals } from './Cardsc';

export default class Card extends Component {

    render() {
        const dealImages = images["deals-card-images"]
        return (
            <Deals>
                {dealImages.map((deal, index) => {
                    return <Deal image={deal.image}>
                    <h4> <u>HOT DEALS</u></h4>
                    <span>{deal.message}</span>
                    <p> + SHOP NOW</p>
                    </Deal>
                })}
            </Deals>
        )
    }
}