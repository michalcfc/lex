import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import Grid from "@components/Grid"
import {useEffect, useState} from "react";
import {RichText} from "prismic-reactjs";
import CategoriesMenu from "@components/CategoriesMenu";
import {queryHomeContent, queryPageContent} from "../utilis/prismicQueries";
import Loader from "@components/Loader";
import Image from "next/image";
import {ImageLoader} from "./../utilis/imageLoader";
import Layout from "../layout";

const Smart: React.FC<HomeProps> = ({ navigation }) => {

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    // Fetch the Prismic initial Prismic content on page load
    const tag = "smart"
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryPageContent(tag);
            const pageDocContent = queryResponse;
            if (pageDocContent) {
                setPageDoc(pageDocContent);
                setLoader(false);
            }
        };
        fetchPrismicContent();
    }, [loader]);

    const renderText = () => {
        const text = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.id == "YLAIrxAAACYAZLYi").pop()
        return text?.node.description
    }

    const getCategories = () => {
        const categroies = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.id !== "YLAIrxAAACYAZLYi")
        return categroies
    }

    const getCurrentPage = () => {
        const currentPage = pageDoc?.data.allPagess.edges.find(e => e.node.main_img !== null)
        return currentPage
    }

    if(loader) {
        return <Loader />;
    }

    if(pageDoc) {
        const title = RichText.asText(pageDoc.headline)
        const currentPage = getCurrentPage()
        return (
            <Layout homeDoc={navigation}>
            <Container>
                <Head>
                    <title>{title}</title>
                </Head>

                <Grid
                    gridGap="2rem"
                    columns="360px 1fr"
                >
                    <CategoriesMenu
                        tag={tag}
                        isContent={pageDoc}
                        categories={getCategories}
                    />
                    {title}
                    <div>
                        <img
                            width="100%"
                            height={"320"}
                            src={currentPage.node.main_img.url}
                        />
                        <RichText
                            render={renderText()}
                        />
                    </div>
                </Grid>
            </Container>
            </Layout>
        )
    }
}

export default Smart

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