import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const Connections: React.FC<HomeProps> = ({

}) => {


    return (
        <Container>
            <Head>
                <title>LEXELL energy</title>
            </Head>
            <h2>LEXELL energy</h2>
            <p>
                Wszystko co związane z energią odnawialną. Panele fotowoltaiczne oraz instalacje fotowoltaiczne tam gdzie tego potrzebujesz.
            </p>
        </Container>
    )
}

export default Connections