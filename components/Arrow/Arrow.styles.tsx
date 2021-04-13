import styledMap from "styled-map";
import styled from "styled-components";
import { position, typography } from "styled-system"

type DataProps = {
    top?: string
    bottom?: string
    left?: string
    right?: string
    fontSize?: number
    upDirection?: boolean
    downDirection?: boolean
    leftDirection?: boolean
    rightDirection?: boolean
}

const arrows = styledMap`
    upDirection: rotate(-45deg);
    leftDirection: rotate(-132deg);
    rightDirection: rotate(45deg);
    downDirection:  rotate(135deg);
    default: rotate(-45deg);
`;

export const ArrowWrapper =styled.div<DataProps>`
    ${position}
    ${typography}
    cursor: pointer;
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    border: ${({theme}) => `1px solid ${theme.colors.black}`};
    transform: ${arrows};
    border-left: transparent;
    border-bottom: transparent;
    transition: all 0.5s ease-in-out;
`;


