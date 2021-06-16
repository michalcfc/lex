import { HomeProps } from "./../Types/Home.d"

import Container from "@components/Container"
import Head from "next/head";

const Fineinvest: React.FC<HomeProps> = () => {
    return (
        <Container>
            <Head>
                <title>Fineinvest</title>
            </Head>
            <h2>Fineinvest</h2>
        </Container>
    )
}

export default Fineinvest