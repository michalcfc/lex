import { useState, useEffect } from "react"

import Card  from "@components/Card"
import Grid  from "@components/Grid"
import Slider from "@components/Slider"
import Section from "@components/Section"
import Accordion from "@components/Accordion"
import CallToAction from "@components/CallToAction"
import Button from "@components/Button"
import { HomeProps } from "./../Types/Home.d"

import Image from "next/image"

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
        desc: "Odpowiemy na wszystkie pytania i zaradzimy na każdy problem związany z naszymi usługami."
    }
]

const posts = [
    {
        id: 1,
        img: "img/post1.jpg",
        title: "Lorem ipusm",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod ..."
    },
    {
        id: 2,
        img: "img/post2.jpg",
        title: "Lorem ipusm",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod ..."
    },
    {
        id: 3,
        img: "img/post3.jpg",
        title: "Lorem ipusm",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod ..."
    }
]

const questions = [
    {
        question: 'Co to jest światłowód?',
        answer: 'Światłowód zrobiony jest z włókna szklanego oraz tworzyw sztucznych. Przewód ten umożliwia bezawaryjne przesyłanie danych przy użyciu fali świetlnej, która osiąga olbrzymią prędkość.'
    },
    {
        question: 'Jaką prędkość osiąga światłowód Lexell?',
        answer: 'Światłowód oferowany przez naszą firmę osiąg prędkość od 300 mbps do 1000 mbps.'
    },
    {
        question: 'Ile czasu potrzeba na założenie światłowodu?',
        answer: 'czas, który potrzebujemy na założenie światłowodu jest zależny od miejsca działania. Nasz zespół pracuje nad tym, żeby wszystko zostało wykonane sprawnie. Średni czas to ok. 10 dni roboczych.'
    },
    {
        question: 'Jaki router wybrać do internetu światłowodowego?',
        answer: 'Decydując się na internet światłowodowy należy zaopatrzyć się w router posiadający porty LAN oraz WAN o przepustowości 1000Mb/s.'
    },
    {
        question: 'Jaki odbiornik trzeba posiadać, żeby odbierać kanały telewizyjne?',
        answer: 'Aby odbierać naszą telewizję cyfrową niezbędny jest odbiornik telewizyjny, który jest wyposażony w tuner DVB-T'
    }
]

const packs = [
    {
        id: 1,
        title: "Telewizja",
        img: "img/telewizja.jpg",
        desc: "Już od 49 PLN",
        link: '/television',
        linkName: "Zobacz szczegóły"
    },
    {
        id: 2,
        title: "Światłowód",
        img: "img/internet.jpg",
        desc: "Już od 59 PLN",
        link: '/network',
        linkName: "Zobacz szczegóły"
    },
    {
        id: 3,
        title: "Telewizja + Światłowód",
        img: "img/fastnetwork.png",
        desc: "Już od 89 PLN",
        link: '/tv-network',
        linkName: "Zobacz szczegóły"
    },
]


const customers = [
    {
        id: 1,
        name: "Serwis",
        cardIcon: faTools,
        desc: "Zajmujemy się naprawą laptopów i komputerów."
    },
    {
        id: 2,
        name: "Internet",
        cardIcon: faWifi,
        desc: "Niezawodne w każdej sytuacji łącze internetowe. Oglądaj filmy, wysyłaj pliki oraz graj bez zakłóceń!"
    },
    {
        id: 3,
        name: "Telewizja",
        cardIcon: faTv,
        desc: "Nowoczesna telewizja cyfrowa  z najbardziej popularnymi kanałami."
    },
]

const images = [
    {
        id: 1,
        img: '/img/serwis.jpg'
    },
    {
        id: 2,
        img: '/img/internet1.jpg'
    },
    {
        id: 3,
        img: '/img/tele.jpg'
    }
]


const Home: React.FC<HomeProps> = ( {

}) => {
   const [activeTab, setTab] = useState(1)
    const [intervalOn, setTabSwich] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            if(intervalOn && (activeTab < customers.length)) {
                setTab(activeTab+1)
            } else {
                setTab(1)
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [activeTab, intervalOn]);

    return (
    <>
    <Section
        mt={-6}
    >
         <Grid
            gridGap="20px"
            columns="repeat(auto-fit, minmax(320px, 1fr));"
            mt={-5}
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
        <Section
            title="Nasze usługi"
            description=""
            mt={-5}
        >
            <Grid
                gridGap="20px"
                columns="repeat(auto-fit, minmax(420px, 1fr));"
                alignItems="center"
            >
                {images.map(img => (
                    <>
                    {activeTab == img.id &&  <img
                    alt="Picture of the author"
                    style={{width: '100%'}}
                    src={`${img.img}`}
                    />}
                    </>
                ))}
                <div>
                {customers.map(card => {
                    return (
                        <Card
                            flexContent
                            hoverEffect
                            key={card.id}
                            mt={4}
                            p={3}
                            onMouseEnter={() => {
                                setTab(card.id)
                                setTabSwich(!intervalOn)
                            }}
                            onMouseLeave={() => setTabSwich(!intervalOn)}
                            active={activeTab == card.id}
                            cardIcon={card.cardIcon}
                            title={card.name}
                            description={card.desc}
                        >
                        </Card>
                    )})}
                </div>
            </Grid>
        </Section>
        <Section
            background="/img/bg.png"
            style={{position: "relative"}}
            mt={5}
            mb={5}
        >
            <CallToAction/>
        </Section>
        <Section
            title="Nasza oferta"
        >
            <Grid
                gridGap="20px"
                columns="repeat(auto-fit, minmax(320px, 1fr));"
            >
                {packs.map(pack => {
                    return (
                        <Card
                            hasRedirection
                            img={pack.img}
                            link={pack.link}
                            key={pack.id}
                            title={pack.title}
                            description={pack.desc}
                            linkName={pack.linkName}
                        >
                        </Card>
                    )})}
            </Grid>
        </Section>
        {/*<div id="myZadarmaCallmeWidget9378"></div>*/}
        <Section
            title="Najczęściej zadawane pytania"
        >
            <Accordion
                questions={questions}
            />
        </Section>
        {/*<Section*/}
        {/*    title="Ostatnio na blogu"*/}
        {/*>*/}
        {/*    <Slider items={posts} />*/}
        {/*</Section>*/}
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