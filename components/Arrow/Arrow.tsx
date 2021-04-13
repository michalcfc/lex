import React from "react"
import {
    ArrowWrapper
} from "./Arrow.styles"
import {ArrowProps } from "./Arrow.d"

const Arrow: React.FC<ArrowProps> = ({
    rightDirection,
    leftDirection,
    upDirection,
    downDirection,
    bottom,
    top,
    onClick,
    left,
     fontSize,
    right
}) => (

<ArrowWrapper
    top={top}
    bottom={bottom}
    left={left}
    fontSize={fontSize}
    right={right}
    upDirection={upDirection}
    downDirection={downDirection}
    leftDirection={leftDirection}
    rightDirection={rightDirection}
    onClick={onClick} 
/>
)

export default Arrow;
