import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"

const HelpDesk: React.FC<HomeProps> = ({

  }) => {
    return (
        <Container>
            <Head>
                <title>LEXELL help desk IT</title>
            </Head>
            <h2>LEXELL help desk IT</h2>


            <p>
                Szybka naprawa Twojego komputera lub laptopa. Zapewniamy profity dla naszych abonentów.
            </p>
        </Container>
    )
}

export default HelpDesk