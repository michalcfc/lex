import React, { useState, useEffect } from "react"
import {
    CallToActionStyle,
    CallToActionImg,
    CallToActionLeft,
    CallToActionRight,
    CallToActionTitle,
    CallToActionText,
    PhoneNumber
} from "./CallToAction.styles"

import Container from "@components/Container"
import Section from "@components/Section"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

import { CallToActionProps } from "./CallToAction.d"
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";

const CallToAction: React.FC<CallToActionProps> = () => {


    return (
        <Section
            background={false}
        >
                <CallToActionStyle>
                    <CallToActionLeft>
                        <CallToActionImg
                            src="/img/doradca.png"
                        />
                    </CallToActionLeft>
                    <CallToActionRight>
                        <CallToActionTitle>Masz pytania? Zadzwoń!</CallToActionTitle>
                        Konsultanci pracują od poniedziałku do piątku w godzinach 8:00 - 17:00.
                        <CallToActionText>
                            <PhoneNumber>
                                <FontAwesomeIcon icon={faPhone} /> 61 814-38-25
                            </PhoneNumber>
                            <PhoneNumber>
                                <FontAwesomeIcon icon={faPhone} /> +48 516-178-131
                            </PhoneNumber>
                        </CallToActionText>
                    </CallToActionRight>
                </CallToActionStyle>
        </Section>
    )
}

export default CallToAction;