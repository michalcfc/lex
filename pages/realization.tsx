import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import {queryHomeContent} from "../utilis/prismicQueries";
import Layout from "../layout";

const Realization: React.FC<HomeProps> = ({ navigation }) => {

    return (
        <Layout homeDoc={navigation}>
        <Container>
            <Head>
                <title>Nasze realizacje</title>
            </Head>
            <h2>Nasze realizacje</h2>
        </Container>
        </Layout>
    )
}

export default Realization

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