import styled from "styled-components";
import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
}

export const CarouselStyle = styled.div<DataProps>`
    display: flex;
    margin: 0 auto;
    text-align: center;
`;

export const Slide = styled.div<DataProps>`
    background:  ${props => props.theme.colors};
    margin: 10px;
    padding: 20px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0,1),0 4px 6px -2px rgba(0,0,0.0.05);
`;

export const SlideTitle = styled.div<DataProps>`
    
`;

export const SlideHeader = styled.div<DataProps>`
    
`;

export const SlideBody = styled.div<DataProps>`
    
`;

export const SlideFooter = styled.div<DataProps>`
    
`;

export const SlideArrow = styled.button<DataProps>`
    // border: solid black;
    cursor: pointer;
    padding: 10px;
    // border-width: 0 3px 3px 0;
    // display: inline-block;
    // padding: 3px;
    // &:hover {
    //     transform: rotate(-45deg);
    // }
`;


