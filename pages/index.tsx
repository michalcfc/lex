import { useState, useEffect } from "react"

import Card  from "@components/Card"
import Grid  from "@components/Grid"
import Section from "@components/Section"
import Container from "@components/Container"
import CallWidget from "@components/CallWidget"
import Cookie from "@components/Cookie"
import CallToAction from "@components/CallToAction"
import Slider from "@components/Slider"
import GoToTop from "@components/GoToTop"
import { HomeProps } from "./../Types/Home.d"

import Head from 'next/head'

import { getAllLayouts } from '../lib/api'
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
        title: "LEXELL internet",
        desc: "Szybkie łącze internetu radiowego lub światłowodu u Ciebie."
    },
    {
        id: 2,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/networks',
        img: 'img/section4.jpg',
        title: "LEXELL help desk IT",
        desc: "Szybka naprawa Twojego komputera lub laptopa. Zapewniamy profity dla naszych abonentów."
    },
    {
        id: 3,
        isFlex: true,
        isReverse: true,
        background: false,
        link: '/television',
        img: 'img/computer.jpeg',
        title: "LEXELL computer",
        desc: "Sprzęt komputerowy od LEXELL to gwarancja wydajności i niezawodności. "
    },
    {
        id: 4,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/service',
        img: 'img/energy.jpeg',
        title: "LEXELL energy",
        desc: "Wszystko co związane z energią odnawialną. Panele fotowoltaiczne oraz instalacje fotowoltaiczne tam gdzie tego potrzebujesz."
    },
    {
        id: 5,
        isFlex: true,
        isReverse: true,
        background: false,
        link: '/monitoring',
        img: 'img/section5.jpg',
        title: "LEXELL smart and security",
        desc: "Oferujemy nowoczesne rozwiązania w aspekcie Twojego bezpieczeństwa, ochrony i monitoringu."
    },
    {
        id: 6,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/connections',
        img: 'img/section9.jpg',
        title: "LEXELL building",
        desc: "Budujemy sieci i przyłącza telekomunikacyjne, elektryczne czy wodno-kanalizacyjno gazowe. Świadczymy usługi pracy mikrokoparki."
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
        <Section
        >
            <Grid
                gridGap="20px"
                columns="repeat(auto-fit, minmax(220px, 1fr));"
                customMargin={-12}
            >
                {cards.map(card => {
                return (
                    <Card
                    p={3}
                    key={card.id}
                    cardIcon={card.cardIcon}
                    title={card.name}
                    description={card.desc}
                    >
                    </Card>
                )})}
            </Grid>
        </Section>

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
                img={section.img}
                />)
            })}

        <Section>
            <Heading>
                Polecane firmy
            </Heading>
            <Grid
                columns="repeat(auto-fit, minmax(120px, 1fr));"
            >
            {companies.map(company => {
                return <img style={{maxWidth: "100%"}} src={company.logo} />
            })}
            </Grid>
        </Section>

        <CallToAction />

        <Cookie/>
        
        <CallWidget />

        {isBottom 
            && <GoToTop />
            }

    
    </>
  )
}

export default Home

export async function getStaticProps({ previewData }) {
    const allPosts = await getAllLayouts(previewData)
    console.log(allPosts)
    return {
        props: { },
    }
  }