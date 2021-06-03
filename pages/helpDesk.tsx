import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import Grid from "@components/Grid"
import MenuAside from "@components/MenuAside"
import MenuAsideMobile from "@components/MenuAsideMobile"
import { getAllPages } from "../lib/api";
import { isMobile }  from "./../utilis/api"
import {useState} from "react";
import { RichText } from 'prismic-reactjs'

const HelpDesk: React.FC<HomeProps> = ({
   text
  }) => {

    console.log(text)

    const categories = [
        {
            id: 1,
            name: "Obsługa serwisowa",
            url: '/helpDesk/obsługa-serwisowa'
        },
        {
            id: 2,
            name: "Zlecone prace serwisowe w zakresie usług it",
            url: '/helpDesk/zlecone-prace-serwisowe-w-zakresie-uslug-it'
        },
    ]

    return (
        <Container>
            <Head>
                <title>LEXELL help desk IT</title>
            </Head>

            <Grid
                gridGap="2rem"
                columns="360px 1fr"
            >
                {isMobile()
                    ? <MenuAsideMobile
                        categories={categories}
                    />
                    : <MenuAside
                        categories={categories}
                />}
                <div>
                    <RichText render={text}/>
                </div>
            </Grid>
        </Container>
    )
}

export default HelpDesk

export async function getStaticProps({ previewData }) {
    const allPages = await getAllPages(previewData)
    return {
        props: {
            text: allPages[0].node.description
        },
    }
}