import React, { useState } from 'react';
import {
    MenuWrapper,
    MenuItem,
} from "./Menu.styles"

import Link from 'next/link'

import { MenuProps } from "./Menu.d"
import Submenu from "../Submenu";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronUp,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'


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
                    {link.name === "Światłowód"
                    ? <a href={link.url} target="_blank" rel={'noopener'} >Światłowód</a>
                    : <Link href={link.url}>
                       <a>
                       {link.name}
                       {link.hasSubmenu 
                        &&  <>{
                            isMenuOpen
                                && link.id == subemnuId 
                                    ? <FontAwesomeIcon icon={faChevronUp} /> 
                                    : <FontAwesomeIcon icon={faChevronDown} />
                        }</>
                        }
                       </a>
                    </Link>}
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