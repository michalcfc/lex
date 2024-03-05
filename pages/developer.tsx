import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";
import Container from "@components/Container";
import Heading from "@components/Heading";
import ContactForm from "@components/ContactForm";
import React, {useEffect, useState} from "react";
import {queryHomeContent, queryStaticPageContent} from "../utilis/prismicQueries";
import Loader from "@components/Loader";
import {RichText} from "prismic-reactjs";
import Layout from "../layout";

const Developer: React.FC<HomeProps> = ({
 navigation
}) => {

    let messageTopic = [
        {
            id: 0,
            value: 'Dla dewelopera',
            label: "Dla dewelopera",
            selected: true
        },
    ]

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    const pageID = "developer"
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryStaticPageContent(pageID);
            const pageDocContent = queryResponse.data.allPagess.edges[0].node;
            if (pageDocContent) {
                setPageDoc(pageDocContent);
                setLoader(false);
            }
        };
        fetchPrismicContent();
    }, [loader]);

    if(loader) {
        return <Loader/>
    }

    if(pageDoc) {
        const title = RichText.asText(pageDoc.page_title);
        return (
            <Layout homeDoc={navigation}>
                <Head>
                    <title>
                        {title}
                    </title>
                </Head>
                <Container>
                    <Heading>
                        {title}
                    </Heading>

                    <RichText render={pageDoc.description}/>
                    <br/>

                    <ContactForm
                        messageTopic={messageTopic}
                    />
                </Container>
            </Layout>
        )
    }
}

export default Developer

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