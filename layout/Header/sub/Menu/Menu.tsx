import React, { useState } from 'react';
import {
    MenuWrapper,
    MenuItem,
} from "./Menu.styles"

import Link from 'next/link'

import { MenuProps } from "./Menu.d"
import Submenu from "../Submenu";


const Menu: React.FC<MenuProps> = ({
    links,
}) => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const [subemnuId, setSubemnuId] = useState(null)

    return (
        <MenuWrapper>
            {links.map((link) => {
               return <MenuItem
                    key={link.id}
                    onMouseEnter={() => {
                        setSubemnuId(link.id)
                        setMenuOpen(true)
                    }}
                    // onMouseLeave={() => {
                    //     setSubemnuId(link.id)
                    //     setMenuOpen(false)
                    // }}
                    >
                   <Link href={`${link.url}`}>{link.name}</Link>
                {link.hasSubmenu
                    && isMenuOpen
                    && link.id == subemnuId
                    && <Submenu
                        links={link.subLinks}
                        setMenuOpen={setMenuOpen}
                    />}
                </MenuItem>
            })}
        </MenuWrapper>
    )
}

export default Menu