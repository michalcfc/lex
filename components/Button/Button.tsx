
import React from "react"

import {
    ButtonWrapper,
} from "./Button.styles"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ButtonProps} from "./Button.d"

const Button: React.FC<ButtonProps> = ({ 
    name,
    variant,
    buttonBackground,
    hero,
    onClick,
    onMouseEnter,
    onMouseLeave
}) => { 
    return (
        <ButtonWrapper
            hero={hero}
            variant={variant}
            onClick={onClick}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            {name}
        </ButtonWrapper>
    )
}

export default Button