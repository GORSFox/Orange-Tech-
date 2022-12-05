import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background : #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFFFF;
    padding: 10px 10px;
    min-width: 120px;
    width: 100%;
        
    ${({variant})=> variant !== "primary" && css`
    min-width: 167px;
    heigth: 33px;

    background: #E4105D;
    
    &::after {
        content: '';
        position: absolute;
        border: 1px solid #e4105D;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }
`}

`