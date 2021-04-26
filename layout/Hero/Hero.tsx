import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import Container from "components/Container"

import {
    HeroIconFirst,
    HeroIconSecond,
    HeroIconThird,
    HeroWrapper,
    HeroContentWrapper,
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
                    Szybki internet i serwis
                </HeroTitle>
                <HeroDescription>
                   Internet radiowy od Lexell to najlepsze rozwiązanie dla wszystkich, którzy ze względu na swoją lokalizację nie posiadają dostępu do sieci światłowodowej.
                   W naszej ofercie znajduje się również serwis jednostek PC oraz laptopów.
                </HeroDescription>
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
                        src="/img/hero2.png"
                        alt="Picture of the author"
                    /> */}
                </HeroContentRight>
            </HeroContentWrapper>
            </Container>
        </HeroWrapper>

    )
}

export default Hero