import React from "react"
import {
    SpaceProps
} from "styled-system"

import {
    ContainerProps
} from "./Container.d"

import {
    ContainerStyles
} from "./Container.styles"


type Props = ContainerProps & SpaceProps

const Container: React.FC<Props> = ({
       children,
   }) => {
    return (
        <ContainerStyles>
            {children}
        </ContainerStyles>
    )
}

export default Container