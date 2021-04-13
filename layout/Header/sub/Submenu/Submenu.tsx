import React from 'react';
import {
    MenuWrapper,
    MenuItem,
    MenuLink
} from "./Submenu.styles"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'

import { SubmenuProps } from "./Submenu.d"

const Submenu: React.FC<SubmenuProps> = ({
    links,
    setMenuOpen,
}) => {
    return (
        <MenuWrapper
            onMouseLeave={() => {
                setMenuOpen(false)
            }}
        >
            {links.map((link, id) => {
               return <MenuItem
                   key={id}
               >
                   <Link href={link.url}>
                       <a>
                       <MenuLink>
                           <FontAwesomeIcon icon={link.icon} />
                           <div>{link.name}</div>
                       </MenuLink>
                       </a>
                   </Link>
                </MenuItem> 
            })}
        </MenuWrapper>
    )
}

export default Submenu