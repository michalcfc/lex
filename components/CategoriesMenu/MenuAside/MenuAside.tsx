import React, {useState} from "react"


import Link from "next/link"
import Flexbox from "@components/Flexbox"


import {
    MenuAsideWrapper,
    CurrentPage,
    MenuAsideContent,
    MenuItem
} from "./MenuAside.styles"


const MenuAside = ({
   categories,
    tag
}) => {
    const [item, setItem] = useState(null)

    return (
        <>
            <MenuAsideWrapper>
                <MenuAsideContent>
                    <h4>Rozwiązania:</h4>
                    <ul>
                        {categories && categories.map(category => {
                            return <MenuItem key={category.node._meta.uid}>
                                <Link href={`/${tag}/${category.node._meta.uid}`}>
                                    <CurrentPage
                                        fontBold={item === category.node._meta.uid}
                                        onClick={() => setItem(category.node._meta.uid)}
                                    >
                                        {category.node.page_title[0].text}
                                    </CurrentPage>
                                </Link>
                            </MenuItem>
                        })}
                    </ul>
                </MenuAsideContent>
            </MenuAsideWrapper>
        </>

    )
}




export default MenuAside