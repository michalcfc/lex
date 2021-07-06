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

const sections = [
    {
        id: 1,
        isFlex: true,
        isReverse: true,
        background: false,
        noRef: true,
        link: '/clientChoose',
        img: 'img/section1.jpg',
        logo: 'img/logos/internet_white.png',
        title: "LEXELL internet",
        desc: "Szybkie łącze internetu radiowego dla Ciebie.",
    },
    {
        id: 2,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/helpDesk',
        img: 'img/section4.jpg',
        logo: 'img/logos/help_desk_white.png',
        title: "LEXELL help desk IT",
        desc: "Szybka naprawa Twojego komputera lub laptopa. Zapewniamy profity dla naszych abonentów.",
        categories: [
            {
                id: 1,
                name: "Obsługa serwisowa",
                url: ''
            },
            {
                id: 2,
                name: "Zlecone prace serwisowe w zakresie usług it",
                url: ''
            },
        ]
    },
    {
        id: 3,
        isFlex: true,
        isReverse: true,
        background: false,
        link: '/computer',
        img: 'img/computer.jpeg',
        logo: 'img/logos/computer_white.png',
        title: "LEXELL computer",
        desc: "Sprzęt komputerowy od LEXELL to gwarancja wydajności i niezawodności. ",
        categories: [
            {
                id: 1,
                name: "Komputery",
                url: ''
            },
            {
                id: 2,
                name: "Notebooki",
                url: ''
            }
        ]
    },
    {
        id: 4,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/energy',
        img: 'img/energy.jpeg',
        logo: 'img/logos/energy_white.png',
        title: "LEXELL energy",
        desc: "Wszystko co związane z energią odnawialną. Panele fotowoltaiczne oraz instalacje fotowoltaiczne tam gdzie tego potrzebujesz.",
        categories: [
            {
                id: 1,
                name: "Instalacje fotowoltaiczne",
                url: ''
            },
            {
                id: 2,
                name: "Banki energii",
                url: ''
            },
            {
                id: 3,
                name: "Pompy ciepła",
                url: ''
            },
            {
                id: 4,
                name: "Ogrzewanie budynkowe",
                url: ''
            },
            {
                id: 5,
                name: "Panele na podczerwień elektryczne",
                url: ''
            },
            {
                id: 6,
                name: "Rekuperacja",
                url: ''
            }
        ]
    },
    {
        id: 5,
        isFlex: true,
        isReverse: true,
        background: false,
        link: '/smart',
        img: 'img/section5.jpg',
        logo: 'img/logos/smart_white.png',
        title: "LEXELL smart and security",
        desc: "Oferujemy nowoczesne rozwiązania w aspekcie Twojego bezpieczeństwa, ochrony i monitoringu.",
        categories: [
            {
                id: 1,
                name: "Kamery",
                url: ''
            },
            {
                id: 2,
                name: "Alarmy",
                url: ''
            },
            {
                id: 3,
                name: "Monitoring",
                url: ''
            },
            {
                id: 4,
                name: "Kontrola dostępu",
                url: ''
            }
        ]
    },
    {
        id: 6,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/building',
        img: 'img/section9.jpg',
        logo: 'img/logos/building_white.png',
        title: "LEXELL building",
        desc: "Budujemy sieci i przyłącza telekomunikacyjne, elektryczne czy wodno-kanalizacyjno gazowe. Świadczymy usługi pracy mikrokoparki.",
        categories: [
            {
                id: 1,
                name: "Transmisje danych w budynkach",
                url: ''
            },
            {
                id: 2,
                name: "Sieci telekomunikacyjne",
                url: ''
            },
            {
                id: 3,
                name: "Przyłącza wodne i konalizacyjne",
                url: ''
            },
            {
                id: 4,
                name: "Projekty i okablowanie energetyczne i światłowodowe",
                url: ''
            }
        ]
    },
]


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