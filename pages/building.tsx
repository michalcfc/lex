import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"


const Building: React.FC<HomeProps> = ({

}) => {

    return (
        <Container>
            <Head>
                <title>LEXELL building</title>
            </Head>
            <h2>LEXELL building</h2>
            <p>
                Budujemy sieci i przyłącza telekomunikacyjne, elektryczne czy wodno-kanalizacyjno gazowe. Świadczymy usługi pracy mikrokoparki.
            </p>
        </Container>
    )
}

export default Building