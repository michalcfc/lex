import Head from "next/head";
import Container from "@components/Container"
import {queryHomeContent, queryPageContent} from './../utilis/prismicQueries'
import Grid from "@components/Grid"
import CategoriesMenu from "@components/CategoriesMenu"
import {RichText} from "prismic-reactjs";
import Layout from "../layout";

const Help = ({ tag, pageDoc, navigation }) => {

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

    // Return the page if a document was retrieved from Prismic
    if (pageDoc) {
        const title = RichText.asText(pageDoc.headline);
        return (
            <Layout homeDoc={navigation}>
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
            </Layout>
        )
    }

    return null;
}

export default Help

export async function getStaticProps({ previewData }) {
    const tag = 'help'
    const queryResponse = await queryPageContent(tag, previewData);
    const queryNavigationResponse = await queryHomeContent(previewData);
    const navigation = queryNavigationResponse.data.allHomepages.edges[0].node;
    const pageDoc = queryResponse;


    return {
        props: {
            tag,
            pageDoc,
            navigation
        },
    }
}