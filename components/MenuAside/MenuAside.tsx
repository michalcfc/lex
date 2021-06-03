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
   categories
}) => {
    const [item, setItem] = useState(null)

    return (
        <>
            <MenuAsideWrapper>
                <MenuAsideContent>
                    <h4>Usługi:</h4>
                    <ul>
                        {categories.map(category => {
                            return <MenuItem>
                                <Link href={category.url}>
                                    <CurrentPage fontBold={item === category.id} onClick={() => setItem(category.id)}>
                                        {category.name}
                                    </CurrentPage>
                                </Link>
                            </MenuItem>
                        })}
                    </ul>
                </MenuAsideContent>
            </MenuAsideWrapper>
            {categories.map(category => {
                return <>
                    {item === category.id
                       ? <p>{category.desc}</p>
                        : ''
                    }
                </>
            })}
        </>

    )
}




export default MenuAside