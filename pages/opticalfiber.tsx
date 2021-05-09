import {useRef, useState} from "react"
import { HomeProps } from "./../Types/Home.d"
import Pricing from "@components/Pricing"
import Container from "@components/Container"
import Card from "@components/Card"
import ClientSwitch from "@components/ClientSwitch"


import Head from "next/head";
import Link from "next/link"

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
    ],

    clients = [
        {
            id: 1,
            name: 'individual'
        },
        {
            id: 2,
            name: 'bussines'
        }
    ]


    return (
        <>
          <Container>
            <Head>
                <title>Internet światłowodowy - cennik</title>
            </Head>

            <>

                <h2>Internet rediowy - cennik</h2>

                <p>
                Mieszkasz w Luboniu, Chwałkówku lub Koninku? 
                <strong> <a href="https://telecom.lexell.pl" target="_blank"> 
                Skorzystaj z naszego internetu światłowodowego</a></strong>.<br/> 
                Twojej lokalizacji nie ma, a chciałbyś korzystać z naszego internetu? <strong><Link href={"/contact"}>Napisz do nas i zgłoś swoje miasto </Link></strong>.
                </p>
                    <Pricing
                        isRadioPricing={true}
                        pricing={pricingRadio}
                    />
            </>  
            </Container>
        </>
    )
}

export default Network