import { useState, useEffect } from 'react'

import { HomeProps } from "./../Types/Home.d"
import ContactForm from "@components/ContactForm";
import Head from "next/head";

import Heading from "@components/Heading"
import Container from "@components/Container"
import {queryHomeContent, queryStaticPageContent} from "../utilis/prismicQueries";
import Loader from "@components/Loader";
import {RichText} from "prismic-reactjs";
import Layout from "../layout";

const Contact: React.FC<HomeProps> = ({
                                          navigation
                                      }) => {

    const [choosenPack, setChoosenPack] = useState<string>('')

    useEffect(() => {
        const packName = localStorage.getItem('choosenPack')
        setChoosenPack(packName)
    }, [choosenPack])

    let messageTopic = [
        {
            id: 0,
            value: '',
            label: "Wybierz temat",
            disabled: true,
            selected: true
        },
        {
            id: 1,
            value: 'Internet',
            label: "Internet"
        },
        {
            id: 2,
            value: 'Telewizja',
            label: "Telewizja"
        },
        {
            id: 3,
            value: "Serwis",
            label: "Serwis"
        },
    ]

    const checkChoosenPack = () => {
        if(choosenPack) {
            messageTopic.push(
                {
                    id: 4,
                    value: choosenPack,
                    label: choosenPack
                })
        }
        return messageTopic
    }

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    const pageID = "contact"
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
                    <ContactForm
                        isContactPage
                        data={pageDoc.body[0].primary}
                        choosenPack={choosenPack}
                        messageTopic={checkChoosenPack()}
                    />
                </Container>
            </Layout>
        )
    }
}

export default Contact

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