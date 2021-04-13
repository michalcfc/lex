import React from 'react';

import {
    WrapperStyles
} from "./Wrapper.styles"

const Wrapper = ({children}) => {
    return (
        <WrapperStyles>
            {children}
        </WrapperStyles>
    )
}

export default Wrapper