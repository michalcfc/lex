import { useState, useEffect } from "react"

import Card  from "@components/Card"
import Grid  from "@components/Grid"
import Slider from "@components/Slider"
import Section from "@components/Section"
import Accordion from "@components/Accordion"
import CallWidget from "@components/CallWidget"
import CallToAction from "@components/CallToAction"
import Button from "@components/Button"
import GoToTop from "@components/GoToTop"
import { HomeProps } from "./../Types/Home.d"


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
        img: 'img/section1.jpg',
        title: "Internet światłowodowy",
        desc: "Dostarczamy usługi połączenia światłowodowego. Zobacz czy działamy w twojej lokalizacji."
    },
    {
        id: 2,
        isFlex: true,
        isReverse: false,
        background: true,
        img: 'img/section.jpg',
        title: "Internet radiowy",
        desc: "Twojej lokalizacji nie ma w obszarze światłowodu? Internet radiowy od Lexell to najlepszy wybór."
    },
    {
        id: 3,
        isFlex: true,
        isReverse: true,
        background: false,
        img: 'img/section2.jpg',
        title: "Telewizja",
        desc: "Najlepsze kanały sportowe, filmowe i informacyjne. Oglądaj co tylko chcesz!"
    },
    {
        id: 4,
        isFlex: true,
        isReverse: false,
        background: true,
        img: 'img/section4.jpg',
        title: "Serwis",
        desc: "Szybka naprawa Twojego komputera lub laptopa. Zapewniamy profity dla naszych abonentów"
    },
    {
        id: 5,
        isFlex: true,
        isReverse: true,
        background: false,
        img: 'img/section5.jpg',
        title: "Monitoring",
        desc: "Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they" + 
        "Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they"
    },
    {
        id: 6,
        isFlex: true,
        isReverse: false,
        background: true,
        img: 'img/section6.jpg',
        title: "Prace budowlane w zakresie przyłączy",
        desc: "Budowa sieci i przyłączy telekomunikacyjnych, elektrycznych, wodno-kanalizacyjno gazowej."
    },
    {
        id: 7,
        isFlex: true,
        isReverse: true,
        background: false,
        img: 'img/section7.jpg',
        title: "Budowa sieci telekomunikacyjnych",
        desc: "Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they" + 
        "Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they"
    },
    {
        id: 8,
        isFlex: true,
        isReverse: false,
        background: true,
        img: 'img/section3.jpg',
        title: "Wykonastwo sieci w budynkach",
        desc: "Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they" + 
        "Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they"
    },
    {
        id: 9,
        isFlex: true,
        isReverse: true,
        background: false,
        img: 'img/section9.jpg',
        title: "Usługi maszynami budowlanymi",
        desc: "Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they" + 
        "Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they"
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
                columns="repeat(auto-fit, minmax(320px, 1fr));"
                mt={-7}
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
                noRef={section.noRef}
                isFlex={section.isFlex}
                isReverse={section.isReverse}
                background={section.background}
                description={section.desc} 
                img={section.img}
                />)
            })}
        
        <CallWidget />

        {isBottom 
            && <GoToTop />
            }

        <CallToAction />
    
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