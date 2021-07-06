import React, {useState} from "react"

import Link from "next/link"

import {
    MenuAsideMobileWrapper,
    CurrentPage,
    MenuAsideMobileContent,
    MenuAsideMobileButtonWrapper,
    MenuAsideMobileButtonContent,
    MenuItem
} from "./MenuAsideMobile.styles"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons'

const MenuAsideMobile = ({
       categories,
    tag,
   }) => {
    const [item, setItem] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <MenuAsideMobileWrapper>
            <MenuAsideMobileButtonWrapper
                onClick={() => setIsOpen(!isOpen)}
            >
                <MenuAsideMobileButtonContent>
                    Usługi <FontAwesomeIcon icon={faCaretDown} />
                </MenuAsideMobileButtonContent>
            </MenuAsideMobileButtonWrapper>
            {isOpen && <div>
                <MenuAsideMobileContent>
                    {!isOpen && <h4>Usługi:</h4>}
                    <ul>
                        {categories.map(category => {
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
                </MenuAsideMobileContent>
            </div>}
            {categories.map(category => {
                return <>
                    {item === category.id
                        ? <p>{category.desc}</p>
                        : ''
                    }
                </>
            })}
        </MenuAsideMobileWrapper>

    )
}




export default MenuAsideMobile