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
    PhoneNumber,
    StyledIcon,
    HeroContentLeft,
    HeroContentRight,
    HeroTitle,
    HeroDescription,
    HeroImg
} from "./Hero.styles"

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
            <HeroContentWrapper>
                <HeroContentLeft>
                <HeroTitle>
                    Jesteśmy tu dla Ciebie
                </HeroTitle>
                <HeroDescription>
                    Nowoczesna technologia. Pomoc. Bezpieczeństwo. Budownictwo. Energia. 
                </HeroDescription>
                <HeroButton>
                    <Link
                        href="contact"
            
                    >
                        <StyledLink>
                            <StyledIcon>
                                <FontAwesomeIcon color="black" icon={faPhone} />
                            </StyledIcon>
                            <PhoneNumber>
                                +48 516-178-131
                            </PhoneNumber>
                        </StyledLink>
                    </Link>
                </HeroButton>
                </HeroContentLeft>
            </HeroContentWrapper>
            </Container>
        </HeroWrapper>

    )
}

export default Hero