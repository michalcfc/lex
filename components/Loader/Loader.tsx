import React from "react"

import { 
    LoaderStyles,
    LoaderCircle,
    LoaderWrapper
} from "./Loader.styles"

const Loader = () => (
    <LoaderWrapper>
        <LoaderStyles>
            <LoaderCircle/>
            <LoaderCircle/>
        </LoaderStyles>
    </LoaderWrapper>
)

export default Loader