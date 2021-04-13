import React from "react"
import {
    AlertWrapper,
    AlertContent
} from "./Alert.styles"
import {AlertProps } from "./Alert.d"

const Alert: React.FC<AlertProps> = ({
text
}) => (

<AlertWrapper>
    <AlertContent>
        {text}
    </AlertContent>
</AlertWrapper>
)

export default Alert;
