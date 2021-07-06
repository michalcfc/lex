import {useEffect, useState} from "react";

import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import { queryPageContent } from './../utilis/prismicQueries'
import Grid from "@components/Grid"
import Loader from "@components/Loader"
import CategoriesMenu from "@components/CategoriesMenu"
import { useMobileDetect }  from "./../utilis/api"
import {RichText} from "prismic-reactjs";
import Image from "next/image";
import {ImageLoader} from "./../utilis/imageLoader";

const Help: React.FC<HomeProps> = () => {

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    // Fetch the Prismic initial Prismic content on page load
    const tag = "help"
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
        const text = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.id == "YKY8qhAAACAA88kf").pop()
        return text?.node.description
    }

    const getCategories = () => {
        const categroies = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.id !== "YKY8qhAAACAA88kf")
        return categroies
    }

    const getCurrentPage = () => {
        const currentPage = pageDoc?.data.allPagess.edges.find(e => e.node.main_img !== null)
        return currentPage
    }

    const currentPage = getCurrentPage()

    if(loader) {
        return <Loader />;
    }

    // Return the page if a document was retrieved from Prismic
    if (pageDoc) {
        const title = RichText.asText(pageDoc.headline);
        return (
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
        )
    }

    return null;
}

export default Help