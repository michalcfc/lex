import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import {
    HeroIconFirst,
    HeroIconSecond,
    HeroIconThird,
    HeroWrapper,
    HeroContentWrapper,
    HeroContentLeft,
    HeroContentRight,
    HeroTitle,
    HeroDescription
} from "./Hero.styles"

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroContentWrapper>
                <HeroContentLeft>
                <HeroTitle>
                    Szybki internet i nowoczesna telewizja w Twoim domu!
                </HeroTitle>
                <HeroDescription>
                    Łącze internetowe dla Twojego domu i firmy bez ograniczeń prędkości.
                </HeroDescription>
                </HeroContentLeft>
                <HeroContentRight>
                    <Link href="/television">
                        <HeroIconFirst><img height="60px" src={"/img/tv.png"} /></HeroIconFirst>
                    </Link>
                    <Link href="/network">
                        <HeroIconSecond><img height="60px" src={"/img/wifi.png"} /></HeroIconSecond>
                    </Link>
                    <Link href="/tv-network">
                        <HeroIconThird><img height="60px" src={"/img/serwis.png"} /></HeroIconThird>
                    </Link>
                    <img
                        src="/img/woman.png"
                        alt="Picture of the author"
                        height={620}
                    />
                </HeroContentRight>
            </HeroContentWrapper>
        </HeroWrapper>

    )
}

export default Hero