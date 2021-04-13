import React from "react"
import { SpaceProps } from "styled-system";

import {
    HeadingWrapper
} from "./Heading.styles"

import {
    HeadingProps
} from "./Heading.d"

type Props = SpaceProps & HeadingProps;

const Heading: React.FC<Props> = (props) => (
    <HeadingWrapper {...props} />
)

export default Heading;
