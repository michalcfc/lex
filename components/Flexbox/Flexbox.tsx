
import {
    Flex
} from "./Flexbox.styles"
import React from "react";
import { FlexProps } from "./Flexbox.d"


const Flexbox: React.FC<FlexProps> = ({
     flex,
     wrap,
     align,
     justify,
     children
 }) => {
    return (
        <Flex
            wrap={wrap}
            align={align}
            justify={justify}
        >
            {children}
        </Flex>
    )
}

export default Flexbox