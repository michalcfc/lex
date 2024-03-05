import { HomeProps } from "./../Types/Home.d"

import Container from "@components/Container"
import Head from "next/head";
import {queryHomeContent} from "../utilis/prismicQueries";
import Layout from "../layout";

const Fineinvest: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <Layout homeDoc={navigation}>
            <Container>
                <Head>
                    <title>Fineinvest</title>
                </Head>
                <h2>Fineinvest</h2>
            </Container>
        </Layout>
    )
}

export default Fineinvest

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