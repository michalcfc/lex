import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import Grid from "@components/Grid"
import MenuAside from "@components/MenuAside"

const HelpDesk: React.FC<HomeProps> = ({

  }) => {

    const categories = [
        {
            id: 1,
            name: "Obsługa serwisowa",
            url: '/helpDesk/obsługa-serwisowa'
        },
        {
            id: 2,
            name: "Zlecone prace serwisowe w zakresie usług it",
            url: '/helpDesk/zlecone-prace-serwisowe-w-zakresie-uslug-it'
        },
    ]

    return (
        <Container>
            <Head>
                <title>LEXELL help desk IT</title>
            </Head>
            <h2>LEXELL help desk IT</h2>

            <Grid
                gridGap=".75rem"
                autoFlow="column"
            >
                <MenuAside
                    categories={categories}
                />

                <p>
                    Szybka naprawa Twojego komputera lub laptopa. Zapewniamy profity dla naszych abonentów.
                </p>
            </Grid>
        </Container>
    )
}

export default HelpDesk