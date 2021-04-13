
import React from "react"

import {
    ButtonWrapper
} from "./Button.styles"

import { ButtonProps} from "./Button.d"

const Button: React.FC<ButtonProps> = ({ 
    name,
    buttonColor,
    buttonBackground,
    hero,
    onClick 
}) => { 
    return (
        <ButtonWrapper
            hero={hero}
            buttonColor={buttonColor}
            onClick={onClick} 
            
        >
            {name}
        </ButtonWrapper>
    )
}

export default Button