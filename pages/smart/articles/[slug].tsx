import { HomeProps } from "./../../../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import {useEffect, useState} from "react";
import {queryHomeContent, queryPageContent, queryPostPageContent} from "../../../utilis/prismicQueries";
import {RichText} from "prismic-reactjs";
import {useRouter} from "next/router";
import Loader from "@components/Loader";
import Gallery from "@components/Gallery";
import {createClient} from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import Layout from "../../../layout";

const Realization: React.FC<HomeProps> = ({ navigation}) => {

    const router = useRouter()

    const [loader, setLoader] = useState(true)
    const [pagePosts, setPagePosts] = useState(null)

    // Fetch the Prismic initial Prismic content on page load
    const tag = "smart"
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const postPageReposnse = await  queryPostPageContent(tag)
            const pagePostDocContent = postPageReposnse
            if (pagePostDocContent) {
                setPagePosts(pagePostDocContent)
                setLoader(false);
            }
        };
        fetchPrismicContent();
    }, [loader]);


    const currentPost = pagePosts?.data.allPosts.edges.find(e => e.node._meta.uid == router.query.slug)

    const renderText = () => {
        const text = pagePosts?.data.allPosts.edges.find(e => e.node._meta.uid == router.query.slug)
        return text?.node.text
    }

    if(loader) {
        return <Loader />
    }

    if(pagePosts) {

        const title = currentPost.node.title[0].text
        const images = currentPost.node.body && currentPost.node.body[0].fields
        return (
            <Layout homeDoc={navigation}>
            <Container>
                <Head>
                    <title>{title}</title>
                </Head>
                <h2>{title}</h2>
                <p>
                    <small>Data: {currentPost.node.release_date}</small>
                </p><br/>
                <RichText render={renderText()}/>
                {images && <Gallery
                    images={images}
                />}
            </Container>
                </Layout>
        )

    }
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

export async function getStaticPaths() {
    const client = createClient()

    const pages = await client.getAllByType('page')

    return {
        paths: pages.map((page) => prismicH.asLink(page)),
        fallback: true,
    }
}