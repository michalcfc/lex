import {useEffect, useState} from "react";

import Main         from "./Main"
import Header       from "./Header"
import Footer       from "./Footer"
import Wrapper      from "./Wrapper"

import { queryHomeContent } from './../utilis/prismicQueries'

import {
    faUpload,
} from "@fortawesome/free-solid-svg-icons";

import Loader from "@components/Loader";


const Layout = ({children}) => {

    const [homeDoc, setHomeDoc] = useState(null);
    const [loader, setLoader] = useState(true);

    // Fetch the Prismic initial Prismic content on page load
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryHomeContent();
            const homeDocContent = queryResponse.data.allHomepages.edges[0].node.body;
            if (homeDocContent) {
                setHomeDoc(homeDocContent);
                setLoader(false);
            }
        };
        fetchPrismicContent();
    }, []);

    if(loader) {
        return <Loader/>
    }

    if(homeDoc) {
        return (

            <Wrapper>
                <Header
                    isMobile={children.props.isMobile}
                />
                <Main>
                    {children}
                </Main>
                <Footer />
            </Wrapper>

        )
    }
}

export default Layout