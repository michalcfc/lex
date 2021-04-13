import { HomeProps } from "./../Types/Home.d"
import Pricing from "@components/Pricing/Pricing";
import Head from "next/head";

const Service: React.FC<HomeProps> = ({

}) => {

    const pricing = [
        {
            id: 1,
            name: 'OK',
            channels: 'Łącze 300 Mbps i 155 programów, w tym 79 HD',
            activation: '149 zł',
            tvAbo: '89 zł/mc',
            decoder: 'Dzierżawa dekodera: 5 zł/mc',
            multiroom: 'Multiroom: 5 zł/mc'
        },
        {
            id: 2,
            name: 'Optymalny',
            channels: 'Łącze 300 Mbps i 212 programów, w tym 113 HD',
            activation: '149 zł',
            tvAbo: '109 zł/mc',
            decoder: 'Dzierżawa dekodera: 5 zł/mc',
            multiroom: 'Multiroom: 5 zł/mc'
        },
        {
            id: 3,
            name: 'Komfortowy',
            channels: 'Łącze 300 Mbps i 243 programów, w tym 128 HD',
            activation: '149 zł',
            tvAbo: '129 zł/mc',
            decoder: 'Dzierżawa dekodera: 5 zł/mc',
            multiroom: 'Multiroom: 5 zł/mc'
        }
    ]

    return (
        <>
            <Head>
                <title>Telewizja z internetem - cennik</title>
            </Head>
            <h2>Telewizja z internetem - cennik</h2>
            <Pricing
                pricing={pricing}
                isTvPricing={true}
            />
        </>
    )
}

export default Service