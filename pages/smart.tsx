import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import Grid from "@components/Grid"
import MenuAside from "@components/MenuAside"
import MenuAsideMobile from "@components/MenuAsideMobile"
import { getAllPages } from "../lib/api";
import { isMobile }  from "./../utilis/api"
import {useState} from "react";

const Smart: React.FC<HomeProps> = ({
       text
   }) => {

    console.log(text)

    const categories = [
        {
            id: 1,
            name: "Kamery",
            url: '/smart/kamery'
        },
        {
            id: 2,
            name: "Alarmy",
            url: '/smart/alarmy'
        },
        {
            id: 3,
            name: "Monitoring",
            url: '/smart/monitoring'
        },
        {
            id: 4,
            name: "Kontrola dostępu",
            url: '/smart/kontrola-dostepu'
        },
    ]

    return (
        <Container>
            <Head>
                <title>LEXELL smart and security</title>
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
                    {text.map(t => {
                        return <>
                            {t.type === 'heading2'
                                ? <h2>{t.text}</h2> : t.text}
                        </>
                    })}
                </div>
            </Grid>
        </Container>
    )
}

export default Smart

export async function getStaticProps({ previewData }) {
    const allPages = await getAllPages(previewData)
    return {
        props: {
            text: allPages[1].node.description
        },
    }
}