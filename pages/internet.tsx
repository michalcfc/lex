import {useRef, useState} from "react"
import { HomeProps } from "./../Types/Home.d"
import Pricing from "@components/Pricing"
import Container from "@components/Container"
import Flexbox from "@components/Flexbox"

import Head from "next/head";

const Network: React.FC<HomeProps> = ({

}) => {

    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView() 


    const pricing = [
                {
                    id: 1,
                    name: '300 Mb/s',
                    download: '300 Mb/s',
                    upload: '150 Mb/s',
                    twoYearsActive: 'Opłata aktywacyjna: 99 zł',
                    twoYearsAbo: '59 zł/mc*',
                    noTimeActive: 'Opłata aktywacyjna: 499 zł',
                    noTimeAbo: '99 zł/mc*'
                },
                {
                    id: 2,
                    name: '750 Mb/s',
                    download: '750 Mb/s',
                    upload: '250 Mb/s',
                    twoYearsActive: 'Opłata aktywacyjna: 99 zł',
                    twoYearsAbo: '69 zł/mc*',
                    noTimeActive: 'Opłata aktywacyjna: 499 zł',
                    noTimeAbo: '109 zł/mc*'
                },
                {
                    id: 3,
                    name: '1000 Mb/s',
                    download: '1000 Mb/s',
                    upload: '350 Mb/s',
                    twoYearsActive: 'Opłata aktywacyjna: 99 zł',
                    twoYearsAbo: '89 zł/mc*',
                    noTimeActive: 'Opłata aktywacyjna: 499 zł',
                    noTimeAbo: '129 zł/mc*'
                },
        ]

        const pricingRadio = [
            {
                id: 1,
                name: '10 Mb/s',
                download: '10 Mb/s',
                upload: '10/1 Mb/s',
                twoYearsActive: '',
                twoYearsAbo: '40 zł/mc*',
                noTimeActive: '',
                noTimeAbo: '50 zł/mc*'
            },
            {
                id: 2,
                name: '20 Mb/s',
                download: '20 Mb/s',
                upload: '20/2 Mb/s',
                twoYearsActive: '',
                twoYearsAbo: '45 zł/mc*',
                noTimeActive: '',
                noTimeAbo: '55 zł/mc*'
            },
            {
                id: 3,
                name: '30 Mb/s',
                download: '30 Mb/s',
                upload: '30/3 Mb/s',
                twoYearsActive: '',
                twoYearsAbo: '55 zł/mc*',
                noTimeActive: '',
                noTimeAbo: '65 zł/mc*'
            },
            {
                id: 4,
                name: '40 Mb/s',
                download: '40 Mb/s',
                upload: '40/4 Mb/s',
                twoYearsActive: '',
                twoYearsAbo: '65 zł/mc*',
                noTimeActive: '',
                noTimeAbo: '80 zł/mc*'
            },
            {
                id: 5,
                name: '50 Mb/s',
                download: '50 Mb/s',
                upload: '50/5 Mb/s',
                twoYearsActive: '',
                twoYearsAbo: '75 zł/mc*',
                noTimeActive: '',
                noTimeAbo: '90 zł/mc*'
            },
    ]


    return (
        <>
          <Container>
            <Head>
                <title>Internet światłowodowy - cennik</title>
            </Head>

            <>

                <h2>Internet radiowy</h2>

                <p>Usługi Internetu radiowego świadczymy już w wielu miastach! Poniżej przedstawiamy cennik wraz z mapą zasięgów.</p><br/>

                   <p> Z cennika skorzystać mogą nowi oraz aktualni klienci Lexell, pod
                    warunkiem nie posiadania na dzień podpisania umowy/aneksu zaległości
                    płatniczych wobec Lexell.</p><br/>

                    <p>Prędkość łącza wskazana w taryfie jest wartością podstawową. W godzinach
                    nocnych (00:00 - 7:00) prędkość jest nawet 2 razy większa.</p>

                    <Pricing
                        isRadioPricing={true}
                        pricing={pricingRadio}
                    />

                    <h2>Mapa zasięgu</h2>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1nVsbWjf9tpuZRH6ssqi3jVXwCVhEQJ4u" width="100%" height="480"></iframe>

                    <Flexbox
                        align={'center'}
                    >
                        <h2>Internet światłowodowy </h2>
                        <a href="http://telecom.lexell.pl" target="_blank">
                            <img src={"/img/logos/telecom.png"}  height={"40px"} style={{marginLeft: '1rem'}}/>
                        </a>
                    </Flexbox>

                    <p>
                        Kliencie, jeśli mieszkasz na terenie Lubonia, Chwałkówka lub Koninka, zapraszamy do zapoznania się z ofertą naszej drugiej spółki Lexell telecom,
                        która oferuje Internet światłowodowy w najlepszej cenie!
                        Poniżej przedstawiamy cennik!<br/>
                        Więcej informacji na stronie: <a href="http://telecom.lexell.pl" target="_blank">http://telecom.lexell.pl/</a>
                    </p>

                    <Pricing
                        isNetworkPricing={true}
                        pricing={pricing}
                    />
            </>  
            </Container>
        </>
    )
}

export default Network