import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const ConstructionMachinery: React.FC<HomeProps> = ({

}) => {

    return (
        <Container>
            <Head>
                <title>Usługi maszynami budowlanymi</title>
            </Head>
            <h2>Usługi maszynami budowlanymi</h2>

        </Container>
    )
}

export default ConstructionMachinery