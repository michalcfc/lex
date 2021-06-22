import {useEffect, useState} from 'react';
import Link from 'next/link'

import Container from "components/Container"
import { RichText } from 'prismic-reactjs';
import {queryHomeContent} from "./../../utilis/prismicQueries";

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
        name: "LEXELL building",
        url: '/building'
    },
    {
        id: 6,
        name: "LEXELL telecom",
        url: '/building'
    },
    {
        id: 7,
        name: "LEXELL smart and security",
        url: '/smart'
    },
    {
        id: 8,
        name: "Fineinvest",
        url: '/fineinvest'
    },

]


const Hero = () => {

    const [homeDoc, setHomeDoc] = useState(null);
    const [notFound, toggleNotFound] = useState(false);

// Fetch the Prismic initial Prismic content on page load
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryHomeContent();
            const homeDocContent = queryResponse.data.allHomepages.edges[0].node;
            if (homeDocContent) {
                setHomeDoc(homeDocContent);
            } else {
                toggleNotFound(true);
            }
        };
        fetchPrismicContent();
    }, []);

    if (homeDoc) {
        const heroText = homeDoc.body[0].primary.heading[0].text;
        console.log(heroText)

        return (
            <HeroWrapper>
                <Container>
                    <HeroContentWrapper>
                        <HeroContentLeft>
                            <HeroText>
                                <HeroTitle>
                                    {heroText}
                                </HeroTitle>
                                {/*<HeroDescription>*/}
                                {/*    Nowoczesna technologia. Pomoc. Bezpieczeństwo. Budownictwo. Energia.*/}
                                {/*</HeroDescription>*/}
                                <HeroBubbles>
                                    {bubbles.map(bubble => {
                                        return <HeroBubble>
                                            {bubble.name === "LEXELL telecom" ?
                                                <a href="http://telecom.lexell.pl" target={"_blank"}>{bubble.name}</a> :
                                                <Link href={bubble.url}>
                                                    {bubble.name}
                                                </Link>
                                            }
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
    if (notFound) {
        return <>loading</>;
    }

    return null;
}

export default Hero