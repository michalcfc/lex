import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const Connections: React.FC<HomeProps> = ({

}) => {


    return (
        <Container>
            <Head>
                <title>Lexell energy</title>
            </Head>
            <h2>Lexell energy</h2>
        </Container>
    )
}

export default Connections