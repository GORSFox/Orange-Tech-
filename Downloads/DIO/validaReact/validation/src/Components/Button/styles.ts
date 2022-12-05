import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    border: 1px solid #81259D;
    border-radius: 21px;
    
    &:disabled {
        pointer-events:${(props)=>props.disabled?'none':null};
        opacity: 0.5;
        
    }
    &:hover {
        opacity: 0.8;
        cursor:pointer;
    }
`