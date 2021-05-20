import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"
import Grid from "@components/Grid"
import MenuAside from "@components/MenuAside"
import { getAllPages } from "../lib/api";

const HelpDesk: React.FC<HomeProps> = ({
   text
  }) => {

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
                autoFlow="column"
            >
                <MenuAside
                    categories={categories}
                />


                <div>
                {text.map(t => {
                    return <>
                        {t.type === 'heading2'
                            && <h2>{t.text}</h2>}
                        {t.text}
                    </>
                })}
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