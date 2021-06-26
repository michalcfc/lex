import Head from "next/head";
import { useRouter } from 'next/router'
import {useEffect, useState} from "react";
import { RichText } from "prismic-reactjs";

import Grid             from "@components/Grid"
import Loader           from "@components/Loader"
import Container        from "@components/Container"
import CategoriesMenu   from "@components/CategoriesMenu";

import {
    queryPageContent
} from "../../utilis/prismicQueries";
const Post = () => {

    const router = useRouter()

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    // Fetch the Prismic initial Prismic content on page load
    const tag = "energy"
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
        const text = pageDoc?.data.allPagess.edges.find(e => e.node._meta.uid == router.query.slug)
        return text?.node.description
    }

    const getCategories = () => {
        const categroies = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.uid !== "lexell-energy")
        return categroies
    }

    if(loader) {
        return <Loader />
    }

    if(pageDoc) {
        const title = RichText.asText(pageDoc.headline)
        return(
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
                    <div>
                        <RichText render={renderText()}/>
                    </div>
                </Grid>
            </Container>
        )
    }
}


export default Post

