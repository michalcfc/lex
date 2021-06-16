import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"

const Realization: React.FC<HomeProps> = () => {

    return (
        <Container>
            <Head>
                <title>Nasze realizacje</title>
            </Head>
            <h2>Nasze realizacje</h2>
        </Container>
    )
}

export default Realization