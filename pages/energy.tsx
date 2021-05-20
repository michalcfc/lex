import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import MenuAside from "@components/MenuAside"
import Grid from "@components/Grid";

const Connections: React.FC<HomeProps> = ({

}) => {

    const categories = [
        {
            id: 1,
            name: "Instalacje fotowoltaiczne",
            url: '/energy/instalacje-fotowoltaiczne'
        },
        {
            id: 2,
            name: "Banki energii",
            url: '/energy/banki-energii'
        },
        {
            id: 3,
            name: "Pompy ciepła",
            url: '/energy/pompy-ciepla'
        },
        {
            id: 4,
            name: "Ogrzewanie budynkowe",
            url: '/energy/ogrzewanie-budynkowe'
        },
        {
            id: 5,
            name: "Panele na podczerwień elektryczne",
            url: '/energy/panele-na-podczerwien-elektryczne'
        },
    ]

    return (
        <Container>
            <Head>
                <title>LEXELL energy</title>
            </Head>

            <Grid
                autoFlow="column"
            >
                <MenuAside
                    categories={categories}
                />


                <div>
                    <h2>LEXELL energy</h2>
                    <p>
                        Wszystko co związane z energią odnawialną. Panele fotowoltaiczne oraz instalacje fotowoltaiczne tam gdzie tego potrzebujesz.
                    </p>
                </div>
            </Grid>

        </Container>
    )
}

export default Connections