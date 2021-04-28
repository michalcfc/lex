import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Pricing from "@components/Pricing"
import Container from "@components/Container"


const OpticalFiber: React.FC<HomeProps> = ({

}) => {

    const pricing = [
        {
            id: 1,
            name: '300 Mbps',
            download: '300 Mbps',
            upload: '150 Mbps',
            twoYearsActive: 'Opłata aktywacyjna: 99 zł',
            twoYearsAbo: '59 zł/mc*',
            noTimeActive: 'Opłata aktywacyjna: 499 zł',
            noTimeAbo: '99 zł/mc*'
        },
        {
            id: 2,
            name: '750 Mbps',
            download: '750 Mbps',
            upload: '250 Mbps',
            twoYearsActive: 'Opłata aktywacyjna: 99 zł',
            twoYearsAbo: '69 zł/mc*',
            noTimeActive: 'Opłata aktywacyjna: 499 zł',
            noTimeAbo: '109 zł/mc*'
        },
        {
            id: 3,
            name: '1000 Mbps',
            download: '1000 Mbps',
            upload: '350 Mbps',
            twoYearsActive: 'Opłata aktywacyjna: 99 zł',
            twoYearsAbo: '89 zł/mc*',
            noTimeActive: 'Opłata aktywacyjna: 499 zł',
            noTimeAbo: '129 zł/mc*'
        },
    ]



    return (
        <Container>
            <Head>
                <title>Internet światłowodowy - cennik</title>
            </Head>
            <h2>Internet światłowodowy - cennik</h2>
            <Pricing
                isNetworkPricing={true}
                pricing={pricing}
            />
        </Container>
    )
}

export default OpticalFiber