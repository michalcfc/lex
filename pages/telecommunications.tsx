import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const Telecommunications: React.FC<HomeProps> = ({

}) => {


    return (
        <Container>
            <Head>
                <title>Budowa sieci telekomunikacyjnych</title>
            </Head>
            <h2>Budowa sieci telekomunikacyjnych</h2>
        </Container>
    )
}

export default Telecommunications