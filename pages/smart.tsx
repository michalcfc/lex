import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import Grid from "@components/Grid"
import MenuAside from "@components/MenuAside"
import MenuAsideMobile from "@components/MenuAsideMobile"
import { getAllPages } from "../utilis/query";
import { isMobile }  from "./../utilis/api"
import {useState} from "react";
import {RichText} from "prismic-reactjs";

const Smart: React.FC<HomeProps> = () => {


    const text = getAllPages('smart')

    const renderText = () => {
        const mainText = text && text.data.allPagess.edges.filter(e => e.node._meta.id == "YLAIrxAAACYAZLYi").pop()
        return mainText && mainText.node.description
    }

    const getCategories = () => {
        const categroies = text && text.data.allPagess.edges.filter(e => e.node._meta.id !== "YLAIrxAAACYAZLYi")
        return categroies
    }

    return (
        <Container>
            <Head>
                <title>LEXELL smart and security</title>
            </Head>

            <Grid
                gridGap="2rem"
                columns="360px 1fr"
            >
                {isMobile() && text
                    ? <MenuAsideMobile
                        categories={getCategories()}
                    />
                    : <MenuAside
                        categories={getCategories()}
                        tag={'smart'}
                    />}
                <div>
                    <RichText render={renderText()}/>
                </div>
            </Grid>
        </Container>
    )
}

export default Smart

// export async function getStaticProps({ previewData }) {
//     const allPages = await getAllPages(previewData)
//     return {
//         props: {
//             text: allPages[0].node.description
//         },
//     }
// }