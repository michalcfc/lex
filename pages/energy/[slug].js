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
            name: "Instalacje fotowoltaiczne",
            url: '/energy/instalacje-fotowoltaiczne',
            desc: 'Instalacje fotowoltaiczne'
        },
        {
            id: 2,
            name: "Banki energii",
            url: '/energy/banki-energii',
            desc: 'Banki energii'
        },
        {
            id: 3,
            name: "Pompy ciepła",
            url: '/energy/pompy-ciepla',
            desc: 'Pompy ciepła'
        },
        {
            id: 4,
            name: "Ogrzewanie budynkowe",
            url: '/energy/ogrzewanie-budynkowe',
            desc: 'Ogrzewanie budynkowe'
        },
        {
            id: 5,
            name: "Panele na podczerwień elektryczne",
            url: '/energy/panele-na-podczerwien-elektryczne',
            desc: 'Panele na podczerwień elektryczne'
        },
    ]

    return <Container>

            <MenuAside
                categories={categories}
            />

    </Container>
}


export default Post

