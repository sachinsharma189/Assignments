import styled from 'styled-components';

export const Deals = styled.div`
display: flex;
justify-content: space-evenly;
margin-top:50px;
`
export const Deal = styled.div`
display: flex;
width: 19%;
background: ${props =>`linear-gradient(to right, #000, transparent) no-repeat, url(${props.image})`};
height: 170px;
background-repeat: no-repeat;
position:relative;
height: 171px;
line-height: 24px;
cursor: pointer;
h4{
    position:absolute;
    top:10px;
    left:10px;
    color:white;
    font-size:12px;
}
span{
    position:absolute;
    top:50px;
    left:10px;
    color:white;
    font-weight:800;
    text-transform:capitalize;
    font-size:20px;
    width: fit-content;
}
p{
    position:absolute;
    top:140px;
    left:10px;
    color:white;
    font-size:10px;
}
`