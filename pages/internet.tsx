import {useEffect, useRef, useState} from "react"
import { HomeProps } from "./../Types/Home.d"
import Pricing from "@components/Pricing"
import Container from "@components/Container"
import Flexbox from "@components/Flexbox"

import Head from "next/head";
import {queryHomeContent, queryMenuContent, queryPricingContent} from "../utilis/prismicQueries";
import Loader from "@components/Loader";
import {RichText} from "prismic-reactjs";
import Layout from "../layout";

const Network: React.FC<HomeProps> = ({
  navigation
}) => {

    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()

    const [loader, setLoader] = useState(true)
    const [pageDoc, setPageDoc] = useState(null);

    // Fetch the Prismic initial Prismic content on page load
    const pageID = "about"
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryPricingContent();
            const pageDocContent = queryResponse.data.allPricings.edges;
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


    if(pageDoc) {
        const radio = pageDoc?.filter(e => e.node._meta.id == "YJHOrhEAAEV9J7pf").pop()
        const opticalFiber = pageDoc?.filter(e => e.node._meta.id == "YNm9ihQAACQAf1ID").pop()
        const mapUrlPath = radio.node.map.embed_url
        return (
            <Layout homeDoc={navigation}>
                <Container>
                    <Head>
                        <title>{radio.node.page_title[0].text}</title>
                    </Head>

                    <>
                        <h2>{radio.node.page_title[0].text}</h2>

                        <RichText render={radio.node.page_description} />

                        <Pricing
                            isRadioPricing={true}
                            pricing={radio.node.body}
                        />

                        <h2>Mapa zasięgu</h2>
                        <iframe src={mapUrlPath}
                                width="100%" height="480"></iframe>

                        <Flexbox
                            align={'center'}
                        >
                            <h2>{opticalFiber.node.page_title[0].text}</h2>
                            <a href="http://telecom.lexell.pl" target="_blank">
                                <img src={"/img/logos/telecom.png"} height={"40px"} style={{marginLeft: '1rem'}}/>
                            </a>
                        </Flexbox>

                        <RichText render={opticalFiber.node.page_description} />

                        <Pricing
                            isNetworkPricing={true}
                            pricing={opticalFiber.node.body}
                        />
                    </>
                </Container>
            </Layout>
        )
    }
}

export default Network

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