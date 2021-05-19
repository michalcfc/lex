import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const Smart: React.FC<HomeProps> = ({

}) => {


    return (
        <Container>
            <Head>
                <title>LEXELL smart and security</title>
            </Head>
            <h2>LEXELL smart and security</h2>
            <p>Oferujemy nowoczesne rozwiązania w aspekcie Twojego bezpieczeństwa, ochrony i monitoringu.</p>
        </Container>
    )
}

export default Smart