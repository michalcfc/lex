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

const CallToAction: React.FC<CallToActionProps> = ({
    data
   }) => {

    return (
        <Section
            background={false}
        >
                <CallToActionStyle>
                    <CallToActionLeft>
                        <CallToActionImg
                            src={data.img.url}
                        />
                    </CallToActionLeft>
                    <CallToActionRight>
                        <CallToActionTitle>{data.heading[0].text}</CallToActionTitle>
                        {data.text[0].text}
                        <CallToActionText>
                            <PhoneNumber>
                                <FontAwesomeIcon icon={faPhone} /> {data.phone_one}
                            </PhoneNumber>
                            <PhoneNumber>
                                <FontAwesomeIcon icon={faPhone} /> {data.phone_two}
                            </PhoneNumber>
                        </CallToActionText>
                    </CallToActionRight>
                </CallToActionStyle>
        </Section>
    )
}

export default CallToAction;