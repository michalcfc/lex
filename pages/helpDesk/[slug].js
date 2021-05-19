import { useRouter } from 'next/router'
import Grid from "@components/Grid"
import MenuAside from "@components/MenuAside"
import Container from "@components/Container"

const Post = () => {

    const router = useRouter()
    const { slug } = router.query


    const categories = [
        {
            id: 1,
            name: "Obsługa serwisowa",
            url: '/helpDesk/obsługa-serwisowa',
            desc: 'Obsługa serwisowa'
        },
        {
            id: 2,
            name: "Zlecone prace serwisowe w zakresie usług it",
            url: '/helpDesk/zlecone-prace-serwisowe-w-zakresie-uslug-it',
            desc: 'Zlecone prace serwisowe'
        },
    ]

    const post = categories[router.query.slug];

    return <Container>
        <h2>LEXELL help desk IT</h2>
        <Grid
            gridGap=".75rem"
            autoFlow="column"
        >
            <MenuAside
                categories={categories}
            />
            {post}
        </Grid>
    </Container>
}

export default Post