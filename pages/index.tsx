import { useState, useEffect } from "react"

import Card  from "@components/Card"
import Grid  from "@components/Grid"
import Slider from "@components/Slider"
import Section from "@components/Section"
import Accordion from "@components/Accordion"
import CallWidget from "@components/CallWidget"
import Cookie from "@components/Cookie"
import CallToAction from "@components/CallToAction"
import Button from "@components/Button"
import GoToTop from "@components/GoToTop"
import { HomeProps } from "./../Types/Home.d"

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
        link: '/networks',
        img: 'img/section1.jpg',
        title: "Lexell internet",
        desc: "Szybkie łącze internetu radiowego lub światłowodu u Ciebie."
    },
    {
        id: 2,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/networks',
        img: 'img/section4.jpg',
        title: "Lexell help desk IT",
        desc: "Szybka naprawa Twojego komputera lub laptopa. Zapewniamy profity dla naszych abonentów."
    },
    {
        id: 3,
        isFlex: true,
        isReverse: true,
        background: false,
        link: '/television',
        img: 'img/computer.jpeg',
        title: "Lexell computer",
        desc: "Sprzęt komputerowy od LEXELL to gwarancja wydajności i niezawodności. "
    },
    {
        id: 4,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/service',
        img: 'img/energy.jpeg',
        title: "Lexell energy",
        desc: "Wszystko co związane z energią odnawialną. Panele fotowoltaiczne oraz instalacje fotowoltaiczne tam gdzie tego potrzebujesz."
    },
    {
        id: 5,
        isFlex: true,
        isReverse: true,
        background: false,
        link: '/monitoring',
        img: 'img/section5.jpg',
        title: "Lexell smart and security",
        desc: "Oferujemy nowoczesne rozwiązania w aspekcie Twojego bezpieczeństwa, ochrony i monitoringu."
    },
    {
        id: 6,
        isFlex: true,
        isReverse: false,
        background: true,
        link: '/connections',
        img: 'img/section9.jpg',
        title: "Lexell building",
        desc: "Budujemy sieci i przyłącza telekomunikacyjne, elektryczne czy wodno-kanalizacyjno gazowe. Świadczymy usługi pracy mikrokoparki."
    },
]


const Home: React.FC<HomeProps> = ( {

}) => {

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

// export async function getStaticProps(context) {
//     const UA = context.req.headers['user-agent'];
//     const isMobile = Boolean(UA.match(
//         /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//     ))
//
//     return {
//         props: {
//             isMobile
//         }
//     }
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const movies = await getMovies()
//   return {
//     props: {
//       movies
//     }
//   }
// }