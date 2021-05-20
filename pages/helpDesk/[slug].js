import { useRouter } from 'next/router'
import Grid from "@components/Grid"
import MenuAside from "@components/MenuAside"
import Container from "@components/Container"
import {getAllPages} from "../../lib/api";

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

    // const post = categories[router.query.slug];

    return <Container>

            <MenuAside
                categories={categories}
            />

    </Container>
}


export default Post

