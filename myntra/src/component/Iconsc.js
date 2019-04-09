import styled from 'styled-components';

export const Icons = styled.span`
    background:${props=>`url('https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png') no-repeat ${props.userobj.offsetX} ${props.userobj.offsetY}`};
    width:${props=>props.userobj.width};
    height:${props=>props.userobj.height};
    zoom:0.6;
    display:flex;
`;
export const Iconbar= styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-basis:20%;
    align-items:center;
    li{
        list-style-type:none;
    }
    span{
        font-size:12px;
        text-align:center;
        font-weight:600;
        padding-top:40px;
    }
`;
