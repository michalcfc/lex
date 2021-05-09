import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import ClientSwitch from "@components/ClientSwitch"

const Connections: React.FC<HomeProps> = ({

}) => {


    return (
        <Container>
            <Head>
                <title></title>
            </Head>
            <h2>Dla kogo internet?</h2>
            <ClientSwitch />
        </Container>
    )
}

export default Connections