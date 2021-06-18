import {useEffect, useState} from "react";

import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import { queryPageContent } from './../utilis/prismicQueries'
import Grid from "@components/Grid"
import Loader from "@components/Loader"
import MenuAside from "@components/MenuAside"
import MenuAsideMobile from "@components/MenuAsideMobile"
import { getAllPages } from "../utilis/query";
import { isMobile }  from "./../utilis/api"
import {RichText} from "prismic-reactjs";

const Energy: React.FC<HomeProps> = () => {

    const [loader, setLoader] = useState(true)
    const [text, setText] = useState(null)
    const [homeDoc, setHomeDoc] = useState(null);
    const [notFound, toggleNotFound] = useState(false);

    // useEffect(() => {
    // setText(getAllPages('help'))
    //     if(text) {
    //         setLoader(false)
    //     }
    // }, [text]);

    // Fetch the Prismic initial Prismic content on page load
    const t = "help-desk"
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryPageContent(t);
            const homeDocContent = queryResponse;
            if (homeDocContent) {
                setHomeDoc(homeDocContent);
            } else {
                toggleNotFound(true);
            }
        };
        fetchPrismicContent();
    }, []);


    const renderText = () => {
        const test = homeDoc?.data.allPagess.edges.filter(e => e.node._meta.id == "YKY8qhAAACAA88kf").pop()
        return test?.node.description
    }

    const getCategories = () => {
        const categroies = homeDoc?.data.allPagess.edges.filter(e => e.node._meta.id !== "YKY8qhAAACAA88kf")
        return categroies
    }


    // Return the page if a document was retrieved from Prismic
    if (homeDoc) {
        const title = RichText.asText(homeDoc.headline);
        return (
            <Container>
                <Head>
                    <title>LEXELL Help Desk IT</title>
                </Head>


                <Grid
                    gridGap="2rem"
                    columns="360px 1fr"
                >

                    {/*{isMobile() && text*/}
                    {/*    ? <MenuAsideMobile*/}
                    {/*        categories={getCategories()}*/}
                    {/*    />*/}
                    {/*    : <MenuAside*/}
                    {/*        categories={getCategories()}*/}
                    {/*        tag={'help'}*/}
                    {/*    />}*/}
                    <MenuAside
                        categories={getCategories()}
                        tag={'help'}
                    />
                    {title}
                    <div>
                        <RichText render={renderText()}/>
                    </div>
                </Grid>

            </Container>
        )
    }

    if (notFound) {
        return <Loader />;
    }

    return null;
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