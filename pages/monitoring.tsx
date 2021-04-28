import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const Monitoring: React.FC<HomeProps> = ({

}) => {


    return (
        <Container>
            <Head>
                <title>Monitoring</title>
            </Head>
            <h2>Monitoring</h2>
        </Container>
    )
}

export default Monitoring