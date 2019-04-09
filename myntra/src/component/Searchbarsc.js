import styled from 'styled-components';

export const Searchbarbox = styled.div`
    display:flex;
    flex-basis:26%;
    justify-content:center;
    align-items:center;
    text-align:center;
    span{
        background: url('https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png') no-repeat -754px 4px;;
        background-size: 1404px 105px;
        width: 28px;
        height: 30px;
        background-color: #f3f3f3;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border: none;
        outline:none;
        display: inline-block;
        box-sizing:content-box;
        text-align:center;
        }
    input{
        background-color: #f3f3f3;
        width: 100%;
        line-height: 30px;
        box-sizing: border-box;
        border:none;
        outline:none;
        padding: 0 7px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        font-size:12px;
        }
    `;

