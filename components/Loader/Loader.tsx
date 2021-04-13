import React from "react"

import { 
    LoaderStyles,
    LoaderDot
} from "./Loader.styles"

const Loader = () => (
    <>
        <LoaderStyles>
            <LoaderDot/>
            <LoaderDot/>
            <LoaderDot/>
        </LoaderStyles>
    </>
)

export default Loader