
import Head from 'next/head';
import { HomeProps } from "./../Types/Home.d"

import Heading from "components/Heading"
import Container from "components/Container"

import {queryStaticPageContent} from './../utilis/prismicQueries'
import {useEffect, useState} from "react";
import Loader from "@components/Loader";
import {RichText} from "prismic-reactjs";

const About: React.FC<HomeProps> = ({

}) => {

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    // Fetch the Prismic initial Prismic content on page load
    const pageID = "about"
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
        return <Loader />;
    }

    if (pageDoc) {
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
                    <div>
                        <RichText render={pageDoc.description}/>
                    </div>
                </Container>
            </>
        )
    }
}

export default About