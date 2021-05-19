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

import {getAllHomepages } from '../lib/api'
import { CMS_NAME } from '../lib/constatns'

import {
    faPhone,
} from '@fortawesome/free-solid-svg-icons'


import {
    faHeadset,
    faAward,
    faTools,
    faWifi,
    faTv,
    faShippingFast
} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import Heading from "@components/Heading"

const cards = [
    {
        id: 1,
        name: "Jakość i doświaczenie",
        cardIcon: faAward,
        desc: "Nasza firma to zespół profesjonalistów i specjalistów w swojej dziedzinie."
    },
    {
        id: 2,
        name: "Szybka realizacja",
        cardIcon: faShippingFast,
        desc: "Internet oraz telewizję założymy u Ciebie w kilkanaście dni od złożenia zamówienia."
    },
    {
        id: 3,
        name: "Sprawna obsługa klienta",
        cardIcon: faHeadset,
        desc: "Doradzimy i rozwiążemy każdy problem związany z naszymi usługami."
    }
]

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
        link: '/service',
        img: 'img/section4.jpg',
        logo: 'img/logos/help_desk_white.png',
        title: "LEXELL help desk IT",
        desc: "Szybka naprawa Twojego komputera lub laptopa. Zapewniamy profity dla naszych abonentów.",
        categories: [
            {
                id: 1,
                name: "Obsługa serwisowa"
            },
            {
                id: 2,
                name: "Zlecone prace serwisowe w zakresie usług it"
            },
        ]
    },
    {
        id: 3,
        isFlex: true,
        isReverse: true,
        background: false,
        link: '',
        img: 'img/computer.jpeg',
        logo: 'img/logos/computer_white.png',
        title: "LEXELL computer",
        desc: "Sprzęt komputerowy od LEXELL to gwarancja wydajności i niezawodności. ",
        categories: [
            {
                id: 1,
                name: "Komputery"
            },
            {
                id: 2,
                name: "Notebooki"
            }
        ]
    },
    {
        id: 4,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '',
        img: 'img/energy.jpeg',
        logo: 'img/logos/energy_white.png',
        title: "LEXELL energy",
        desc: "Wszystko co związane z energią odnawialną. Panele fotowoltaiczne oraz instalacje fotowoltaiczne tam gdzie tego potrzebujesz.",
        categories: [
            {
                id: 1,
                name: "Instalacje fotowoltaiczne"
            },
            {
                id: 2,
                name: "Banki energii"
            },
            {
                id: 3,
                name: "Pompy ciepła"
            },
            {
                id: 4,
                name: "Ogrzewanie budynkowe"
            },
            {
                id: 5,
                name: "Panele na podczerwień elektryczne"
            },
            {
                id: 6,
                name: "Rekuperacja"
            }
        ]
    },
    {
        id: 5,
        isFlex: true,
        isReverse: true,
        background: false,
        link: '',
        img: 'img/section5.jpg',
        logo: 'img/logos/smart_white.png',
        title: "LEXELL smart and security",
        desc: "Oferujemy nowoczesne rozwiązania w aspekcie Twojego bezpieczeństwa, ochrony i monitoringu.",
        categories: [
            {
                id: 1,
                name: "Kamery"
            },
            {
                id: 2,
                name: "Alarmy"
            },
            {
                id: 3,
                name: "Monitoring"
            },
            {
                id: 4,
                name: "Kontrola dostępu"
            }
        ]
    },
    {
        id: 6,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '',
        img: 'img/section9.jpg',
        logo: 'img/logos/building_white.png',
        title: "LEXELL building",
        desc: "Budujemy sieci i przyłącza telekomunikacyjne, elektryczne czy wodno-kanalizacyjno gazowe. Świadczymy usługi pracy mikrokoparki.",
        categories: [
            {
                id: 1,
                name: "Transmisje danych w budynkach"
            },
            {
                id: 2,
                name: "Sieci telekomunikacyjne"
            },
            {
                id: 3,
                name: "Przyłącza wodne i konalizacyjne"
            },
            {
                id: 4,
                name: "Projekty i okablowanie energetyczne i światłowodowe"
            }
        ]
    },
]

const companies = [
    {
        id: 1,
        name: 'Jachimov',
        logo: '/img/logo-hotel-berg.png'
    },
    {
        id: 2,
        name: 'Jachimov',
        logo: '/img/logo-estato.png'
    },
    {
        id: 3,
        name: 'Jachimov',
        logo: '/img/logo-bello.png'
    },
    {
        id: 4,
        name: 'Jachimov',
        logo: '/img/logo-celeste.png'
    },
    {
        id: 5,
        name: 'Jachimov',
        logo: '/img/logo-hotel-california.png'
    }
]


const Home: React.FC<HomeProps> = () => {


    const [isBottom, setIsBottom] = useState(false)

    useEffect(() => {
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
     }, [])
    
    return (
    <>
        <Head>
          {/* <title>{heroPost.hero_title[0].text}</title> */}
        </Head>

        <Container>
            <LogoCarousel />
        </Container>

        {/*<Section*/}
        {/*>*/}
        {/*    <Grid*/}
        {/*        gridGap="20px"*/}
        {/*        columns="repeat(auto-fit, minmax(220px, 1fr));"*/}
        {/*    >*/}
        {/*        {cards.map(card => {*/}
        {/*        return (*/}
        {/*            <Card*/}
        {/*            p={3}*/}
        {/*            key={card.id}*/}
        {/*            cardIcon={card.cardIcon}*/}
        {/*            title={card.name}*/}
        {/*            description={card.desc}*/}
        {/*            >*/}
        {/*            </Card>*/}
        {/*        )})}*/}
        {/*    </Grid>*/}
        {/*</Section>*/}

        {sections.map(section => {
            return (<Section
                key={section.id}
                title={section.title}
                link={section.link}
                noRef={section.noRef}
                isFlex={section.isFlex}
                isReverse={section.isReverse}
                background={section.background}
                description={section.desc}
                logo={section.logo}
                img={section.img}
                categories={section.categories}
                />)
            })}

        <CallToAction />

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

export default Home

export async function getStaticProps({ previewData }) {
    const allPosts = await getAllHomepages(previewData)
    return {
        props: {},
    }
  }