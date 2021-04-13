import { HomeProps } from "./../Types/Home.d"
import Pricing from "@components/Pricing/Pricing";
import Head from "next/head";

const Television: React.FC<HomeProps> = ({

}) => {

    const pricing = [
        {
            id: 1,
            name: "TV Smart",
            channels: "155 programów, w tym 79 HD",
            activation: "49 zł",
            tvAbo: "49 zł/mc",
            decoder: "Dzierżawa dekodera: 5 zł/mc"
        },
        {
            id: 2,
            name: "TV Optimum",
            channels: "212 programów, w tym 113 HD",
            activation: "49 zł",
            tvAbo: "59 zł/mc",
            decoder: "Dzierżawa dekodera: 5 zł/mc"
        },
        {
            id: 3,
            name: "TV Platinium",
            channels: "243 programów, w tym 128 HD",
            activation: "49 zł",
            tvAbo: "89 zł/mc",
            decoder: "Dzierżawa dekodera: 5 zł/mc"
        }
    ]

    return (
        <>
            <Head>
                <title>Telewizja - cennik</title>
            </Head>
            <h2>Telewizja - cennik</h2>
            <Pricing
                pricing={pricing}
                isTvPricing={true}
            />
        </>
    )
}

export default Television