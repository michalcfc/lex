
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
}) => { 
    return (
        <ButtonWrapper
            hero={hero}
            variant={variant}
            onClick={onClick} 
        >
            {name}
        </ButtonWrapper>
    )
}

export default Button