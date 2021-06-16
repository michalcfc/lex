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

const Energy: React.FC<HomeProps> = () => {

    const text = getAllPages('computer')

    const renderText = () => {
        const test = text && text.data.allPagess.edges.filter(e => e.node._meta.id == "YMMWRRQAACUAZPiw").pop()
        return test && test.node.description
    }


    const getCategories = () => {
        const categroies = text && text.data.allPagess.edges.filter(e => e.node._meta.id !== "YMMWRRQAACUAZPiw")
        return categroies
    }

    return (
        <Container>
            <Head>
                <title>LEXELL Building</title>
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
                        tag={'computer'}
                    />}
                <div>
                    <RichText render={renderText()}/>
                </div>
            </Grid>
        </Container>
    )
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