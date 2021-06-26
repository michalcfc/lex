import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import Grid from "@components/Grid"
import {useEffect, useState} from "react";
import {RichText} from "prismic-reactjs";
import {queryPageContent} from "../utilis/prismicQueries";
import CategoriesMenu from "@components/CategoriesMenu";
import Loader from "@components/Loader";

const Computer: React.FC<HomeProps> = () => {

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    // Fetch the Prismic initial Prismic content on page load
    const tag = "computer"
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
        const text = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.id == "YMMWRRQAACUAZPiw").pop()
        return text?.node.description
    }


    const getCategories = () => {
        const categroies = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.id !== "YMMWRRQAACUAZPiw")
        return categroies
    }

    if(loader) {
        return <Loader />;
    }

    if(pageDoc) {
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
                        <RichText render={renderText()}/>
                    </div>
                </Grid>
            </Container>
        )
    }
}

export default Computer

// export async function getStaticProps({ previewData }) {
//     const allPages = await getAllPages(previewData)
//     return {
//         props: {
//             text: allPages[0].node.description
//         },
//     }
// }