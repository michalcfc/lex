import React, { useState } from "react"
import {
    CookieWrapper,
    CookieContent

} from "./Cookie.styles"

import { CookieProps } from "./Cookie.d"

import Button from "@components/Button"
import { truncate } from "fs/promises"

const Cookie: React.FC<CookieProps> = ({


    }) => {

    const [isCookieAccept, setCookieAccept] = useState(false)

    return (
        <>
        {!isCookieAccept && <CookieWrapper>
            <CookieContent>
                <span>
                    This site uses cookies to provide you with a better user experience. 
                    For more information, refer to our Privacy Policy
                </span>
                <Button 
                    name="Ok"
                    variant="cookie"
                    onClick={() => setCookieAccept(true)}
                />
            </CookieContent>
        </CookieWrapper>}
        </>
    )
}

export default Cookie;