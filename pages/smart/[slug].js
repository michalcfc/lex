import Head from "next/head";
import { useRouter } from 'next/router'
import {useEffect, useState} from "react";
import { RichText } from "prismic-reactjs";

import Grid             from "@components/Grid"
import Card             from "@components/Card";
import Loader           from "@components/Loader"
import Container        from "@components/Container"
import CategoriesMenu   from "@components/CategoriesMenu";

import {
    queryPageContent, queryPostPageContent
} from "../../utilis/prismicQueries";
const Post = () => {

    const router = useRouter()

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);
    const [pagePosts, setPagePosts] = useState(null)

    // Fetch the Prismic initial Prismic content on page load
    const tag = "smart"
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryPageContent(tag);
            const postPageReposnse = await  queryPostPageContent(tag)
            const pageDocContent = queryResponse;
            const pagePostDocContent = postPageReposnse.data.allPosts.edges
            if (pageDocContent) {
                setPageDoc(pageDocContent);
                setPagePosts(pagePostDocContent)
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
        const categroies = pageDoc?.data.allPagess.edges.filter(e => e.node._meta.uid !== tag)
        return categroies
    }

    const isPageWithPosts = router.query.slug === 'smart-realization'

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
                        {pagePosts.map(post => (
                            <>
                                {isPageWithPosts && <Card
                                    mb={3}
                                    imgFlex
                                    img={post.node.main_image.url}
                                    description={post.node.text}
                                    title={post.node.title[0].text}
                                    link={`/${tag}/articles/${post.node._meta.uid}`}
                                    linkName={post.node.cta_text}
                                />}
                            </>
                        ))}
                    </div>
                </Grid>
            </Container>
        )
    }
}


export default Post

