import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";
import Image from 'next/image'

import Container from "@components/Container"
import Grid from "@components/Grid"
import MenuAside from "@components/CategoriesMenu/MenuAside"
import MenuAsideMobile from "@components/CategoriesMenu/MenuAsideMobile"

import {RichText} from "prismic-reactjs";
import {useEffect, useState} from "react";
import {queryPageContent} from "../utilis/prismicQueries";
import Loader from "@components/Loader";
import CategoriesMenu from "@components/CategoriesMenu";
import {ImageLoader} from "./../utilis/imageLoader";

const Energy: React.FC<HomeProps> = () => {

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    // Fetch the Prismic initial Prismic content on page load
    const tag = "building"
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
        const text = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.id == "YMMWdRQAACcAZPmI").pop()
        return text?.node.description
    }


    const getCategories = () => {
        const categroies = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.id !== "YMMWdRQAACcAZPmI")
        return categroies
    }

    const getCurrentPage = () => {
        const currentPage = pageDoc?.data.allPagess.edges.find(e => e.node.main_img !== null)
        return currentPage
    }

    const currentPage = getCurrentPage()

    const myLoader = ({ src, width, quality }) => {
        return `${currentPage.node.main_img.url}/${src}?w=${width}&q=${quality || 75}`
    }

    if(loader) {
        return <Loader />;
    }

    if(pageDoc) {
        const title = RichText.asText(pageDoc.headlin)
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
}

export default Energy

// export async function getStaticProps({ previewData }) {
//     const allPages = await getAllPages(previewData)
//     return {
//         props: {
//             text: allPages[0].node.description
//         },
//     }
// }