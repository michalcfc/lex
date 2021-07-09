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
import Loader from "@components/Loader";

const Hero = () => {

    const [homeDoc, setHomeDoc] = useState(null);
    const [loader, setLoader] = useState(true);

    // Fetch the Prismic initial Prismic content on page load
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryHomeContent();
            const homeDocContent = queryResponse.data.allHomepages.edges[0].node;
            if (homeDocContent) {
                setHomeDoc(homeDocContent);
                setLoader(false)
            }
        };
        fetchPrismicContent();
    }, []);

    if (loader) {
        return <Loader/>
    }

    if (homeDoc) {

        const heroText = homeDoc.body[0].primary.heading[0].text;
        return (
            <HeroWrapper>
                <Container>
                    <HeroContentWrapper>
                        <HeroContentLeft>
                            <HeroText>
                                <HeroTitle>
                                    {heroText}
                                </HeroTitle>
                                <HeroBubbles>
                                    {homeDoc.body[0].fields.map(bubble => {
                                        return <HeroBubble>
                                            {bubble.name === "LEXELL telecom" ?
                                                <a href="http://telecom.lexell.pl" target={"_blank"}>{bubble.name}</a> :
                                                <Link href={bubble.url._meta.uid}>
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

    return null;
}

export default Hero