import React, {Component} from 'react';
import {BrandCard, BrandDesc, Footer, BrandsWrapper, BrandTitle, ImageCaption} from "./style";
import images from '../../images';

export default class BrandsComponent extends Component {

    render(){
        const brandImages = images["brands-focus-images"];
        return (
            
            <BrandsWrapper>
                {brandImages.map((brand, index) => {
                    return (
                        <BrandCard image={brand.image}>
                            <ImageCaption brand-title={brand["brand-name"]} text={brand.message}>
                                <BrandTitle>{brand['brand-name']}</BrandTitle>
                                <BrandDesc>{brand.message}</BrandDesc>
                                <Footer>+ EXPLORE</Footer>
                            </ImageCaption>
                        </BrandCard>
                    )
                })}
            </BrandsWrapper>
        )
    }

}