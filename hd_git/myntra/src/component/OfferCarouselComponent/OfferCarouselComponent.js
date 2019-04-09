import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import images from '../../images.json';
import {Image} from "./style";

export default class OfferCarouselComponent extends React.Component{

    render() {
        const carouselImgs = images["offer-carousel-images"];
        return (
            <Carousel
                style={{margin: '14px'}}
                interval={3000}
                // controls={false}
            >
                {carouselImgs.map((image, index) => {
                    return (
                        <Carousel.Item key={index} style={{cursor: 'pointer'}}>
                            <Image src={image.image}/>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        )
    }
}