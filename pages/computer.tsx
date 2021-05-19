import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const Connections: React.FC<HomeProps> = ({

}) => {


    return (
        <Container>
            <Head>
                <title>LEXELL computer</title>
            </Head>
            <h2>LEXELL computer</h2>
            <p>
                Sprzęt komputerowy od LEXELL to gwarancja wydajności i niezawodności.
            </p>
        </Container>
    )
}

export default Connections