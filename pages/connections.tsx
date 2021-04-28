import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const Connections: React.FC<HomeProps> = ({

}) => {


    return (
        <Container>
            <Head>
                <title>Prace budowlane w zakresie przyłączy</title>
            </Head>
            <h2>Prace budowlane w zakresie przyłączy</h2>
        </Container>
    )
}

export default Connections