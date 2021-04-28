import React from "react"
import {
    CookieWrapper,
    CookieContent

} from "./Cookie.styles"

import { CookieProps } from "./Cookie.d"

import Button from "@components/Button"

const Cookie: React.FC<CookieProps> = ({


    }) => {

    return (
        <CookieWrapper>
            <CookieContent>
                <span>
                    This site uses cookies to provide you with a better user experience. 
                    For more information, refer to our Privacy Policy
                </span>
                <Button 
                    name="Ok"
                    variant="cookie"
                    onClick={() => {}}
                />
            </CookieContent>
        </CookieWrapper>
    )
}

export default Cookie;