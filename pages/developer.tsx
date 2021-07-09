import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";
import Container from "@components/Container";
import Heading from "@components/Heading";
import ContactForm from "@components/ContactForm";
import React, {useEffect, useState} from "react";
import {queryStaticPageContent} from "../utilis/prismicQueries";
import Loader from "@components/Loader";
import {RichText} from "prismic-reactjs";

const Developer: React.FC<HomeProps> = ({

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
            <>
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
            </>
        )
    }
}

export default Developer