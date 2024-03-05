import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import ClientSwitch from "@components/ClientSwitch"
import {queryHomeContent} from "../utilis/prismicQueries";
import Layout from "../layout";

const Connections: React.FC<HomeProps> = ({
    navigation
}) => {


    return (
        <Layout homeDoc={navigation}>
            <Container>
                <Head>
                    <title></title>
                </Head>
                <h2>Dla kogo internet?</h2>
                <ClientSwitch />
            </Container>
        </Layout>
    )
}

export default Connections

export async function getStaticProps({
                                         previewData,
                                     }) {

    const queryResponse = await queryHomeContent(previewData);
    const navigation = queryResponse.data.allHomepages.edges[0].node;

    return {
        props: {
            navigation,
        },
    };
}