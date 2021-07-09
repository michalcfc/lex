import { useState, useEffect } from "react"

import Card  from "@components/Card"
import Grid  from "@components/Grid"
import Section from "@components/Section"
import Container from "@components/Container"
import CallWidget from "@components/CallWidget"
import Cookie from "@components/Cookie"
import CallToAction from "@components/CallToAction"
import LogoCarousel from "@components/LogoCarousel"
import GoToTop from "@components/GoToTop"
import { HomeProps } from "./../Types/Home.d"

import Head from 'next/head'

import CookieConsent from "react-cookie-consent";

import {queryHomeContent} from "../utilis/prismicQueries";
import Loader from "@components/Loader";


const Home: React.FC<HomeProps> = ({
   allPosts
}) => {
    
    const [isBottom, setIsBottom] = useState(false)

    const [homeDoc, setHomeDoc] = useState(null);
    const [loader, setLoader] = useState(true);



    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryHomeContent();
            const homeDocContent = queryResponse.data.allHomepages.edges[0].node.body;
            if (homeDocContent) {
                setHomeDoc(homeDocContent);
                setLoader(false)
            }
        };
        fetchPrismicContent();
        const onScroll = function () {
           if (window.innerHeight + window.scrollY >= document.documentElement.clientHeight) {
            setIsBottom(true)
           } 
           if(window.scrollY < 500) {
            setIsBottom(false)
           }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
     }, [loader])

    if(loader) {
        return <Loader/>
    }

    if(homeDoc) {
        return (
            <>
                <Head>
                    {/* <title>{heroPost.hero_title[0].text}</title> */}
                </Head>


                {homeDoc.map((section, index) => {
                    if(section.type === 'partners') {
                        return (
                            <Container>
                                <LogoCarousel
                                    logos={section.fields}
                                />
                            </Container>
                        )
                    }
                    if(section.type === 'feature') {
                        return (<Section
                            title={section.primary.heading[0].text}
                            description={section.primary.text[0].text}
                            isFlex={true}
                            isReverse={index%2 == 1}
                            background={index%2 == 0}
                            link={section.primary.url._meta ? `/${section.primary.url._meta.uid}` : '/'}
                            img={section.primary.featured_image.url}
                            logo={section.primary.logo.url}
                        />)
                    }

                    if(section.type === 'centered_text') {
                     return   <CallToAction
                                data={section.primary}
                            />
                    }
                })}


                <CookieConsent
                    location="bottom"
                    buttonText="Rozumiem"
                    cookieName="myAwesomeCookieName2"
                >
                    Korzystając ze strony wyrażasz zgodę na używanie cookies zgodnie z polityką prywatności
                </CookieConsent>

                <CallWidget />

                {isBottom
                && <GoToTop />
                }
            </>
        )
    }
}

export default Home