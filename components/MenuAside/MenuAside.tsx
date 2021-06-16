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
                                    <a>
                                    <CurrentPage
                                        fontBold={item === category.node._meta.uid}
                                        onClick={() => setItem(category.node._meta.uid)}
                                    >
                                        {category.node.page_title[0].text}
                                    </CurrentPage>
                                    </a>
                                </Link>
                            </MenuItem>
                        })}
                        <MenuItem>
                            <Link href='/realization'>
                                Nasze realizacje
                            </Link>
                        </MenuItem>
                    </ul>
                </MenuAsideContent>
            </MenuAsideWrapper>
            {/*{categories.map(category => {*/}
            {/*    return <>*/}
            {/*        {item === category.id*/}
            {/*           ? <p>{category.desc}</p>*/}
            {/*            : ''*/}
            {/*        }*/}
            {/*    </>*/}
            {/*})}*/}
        </>

    )
}




export default MenuAside