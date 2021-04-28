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
                    Building Trust Over the Years
                </HeroTitle>
                <HeroDescription>
                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed.
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
                <HeroContentRight>
                    {/* <Link href="/television">
                        <HeroIconFirst><img height="60px" src={"/img/tv.png"} /></HeroIconFirst>
                    </Link>
                    <Link href="/network">
                        <HeroIconSecond><img height="60px" src={"/img/wifi.png"} /></HeroIconSecond>
                    </Link>
                    <Link href="/tv-network">
                        <HeroIconThird><img height="60px" src={"/img/serwis.png"} /></HeroIconThird>
                    </Link> */}
                    {/* <HeroImg
                        src="/img/lex_hero.png"
                        alt="Picture of the author"
                    /> */}
                </HeroContentRight>
            </HeroContentWrapper>
            </Container>
        </HeroWrapper>

    )
}

export default Hero