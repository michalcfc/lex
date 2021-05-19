import React, {useState} from "react"


import Link from "next/link"
import Flexbox from "@components/Flexbox"


import {
    MenuAsideWrapper,
    CurrentPage
} from "./MenuAside.styles"


const MenuAside = ({
   categories
}) => {
    const [item, setItem] = useState(null)

    return (
        <Flexbox

        >
            <MenuAsideWrapper>
                <ul>
                    {categories.map(category => {
                        return <li>
                            <Link href={category.url}>
                                <CurrentPage fontBold={item === category.id} onClick={() => setItem(category.id)}>
                                    {category.name}
                                </CurrentPage>
                            </Link>
                        </li>
                    })}
                </ul>
            </MenuAsideWrapper>
            {categories.map(category => {
                return <>
                    {item === category.id
                        && <p>{category.desc}</p>
                    }
                </>
            })}
        </Flexbox>

    )
}




export default MenuAside