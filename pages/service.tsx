import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"

const Service: React.FC<HomeProps> = ({

  }) => {
    return (
        <Container>
            <Head>
                <title>Serwis komputerów i laptopów</title>
            </Head>
            <h2>Serwis komputerów i laptopów</h2>
        </Container>
    )
}

export default Service