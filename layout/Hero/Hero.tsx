import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import Button from "components/Button"
import Container from "components/Container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

import {
    HeroIconFirst,
    HeroIconSecond,
    HeroIconThird,
    HeroWrapper,
    HeroContentWrapper,
    StyledLink,
    HeroButton,
    HeroBubble,
    HeroBubbles,
    PhoneNumber,
    StyledIcon,
    HeroContentLeft,
    HeroContentRight,
    HeroTitle,
    HeroDescription,
    HeroText
} from "./Hero.styles"

const bubbles = [
    {
        id: 1,
        name: 'LEXELL internet',
        url: '/clientChoose'
    },
    {
        id: 2,
        name: 'LEXELL help desk IT',
        url: '/helpDesk'
    },
    {
        id: 3,
        name: "LEXELL computer",
        url: '/computer'
    },
    {
        id: 4,
        name: "LEXELL energy",
        url: '/energy'
    },
    {
        id: 5,
        name: "LEXELL smart and security",
        url: '/smart'
    },
    {
        id: 6,
        name: "LEXELL building",
        url: '/building'
    },

]

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
            <HeroContentWrapper>
                <HeroContentLeft>
                    <HeroText>
                        <HeroTitle>
                            Jesteśmy tu dla Ciebie
                        </HeroTitle>
                        <HeroDescription>
                            Nowoczesna technologia. Pomoc. Bezpieczeństwo. Budownictwo. Energia.
                        </HeroDescription>
                        <HeroBubbles>
                            {bubbles.map(bubble => {
                                return <HeroBubble>
                                    <Link href={bubble.url}>
                                        {bubble.name}
                                    </Link>
                                </HeroBubble>
                            })}
                        </HeroBubbles>
                    </HeroText>
                </HeroContentLeft>
            </HeroContentWrapper>
            </Container>
        </HeroWrapper>

    )
}

export default Hero