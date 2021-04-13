import { HomeProps } from "./../Types/Home.d"
import Pricing from "@components/Pricing"
import Head from "next/head";

const Network: React.FC<HomeProps> = ({

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
                // {
                //     id: 4,
                //     name: '2 Gbps',
                //     download: '2 Gbps',
                //     upload: '350 Mbps',
                //     twoYearsActive: 'Opłata aktywacyjna: 189 zł',
                //     twoYearsAbo: '119 zł/mc*',
                //     noTimeActive: 'Opłata aktywacyjna: 599 zł',
                //     noTimeAbo: '149 zł/mc*'
                // },
                // {
                //     id: 5,
                //     name: '6 Gbps',
                //     download: '6 Gbps',
                //     upload: '350 Mbps',
                //     twoYearsActive: 'Opłata aktywacyjna: 189 zł',
                //     twoYearsAbo: '129 zł/mc*',
                //     noTimeActive: 'Opłata aktywacyjna: 599 zł',
                //     noTimeAbo: '169 zł/mc*'
                // },
                // {
                //     id: 6,
                //     name: '10 Gbps',
                //     download: '10 Gbps',
                //     upload: '350 Mbps',
                //     twoYearsActive: 'Opłata aktywacyjna: 189 zł',
                //     twoYearsAbo: '139 zł/mc*',
                //     noTimeActive: 'Opłata aktywacyjna: 599 zł',
                //     noTimeAbo: '189 zł/mc*'
                // }
        ]


    return (
        <>
            <Head>
                <title>Internet światłowodowy - cennik</title>
            </Head>
            <h2>Internet światłowodowy - cennik</h2>
            <Pricing
                isNetworkPricing={true}
                pricing={pricing}
            />
        </>
    )
}

export default Network