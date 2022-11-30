import React from 'react';
import {
    MenuWrapper,
    MenuItem,
    MenuLink,
    MenuContent,
    MenuColumns
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
            <MenuContent>
                <MenuColumns>
            {links?.map((link, id) => {
               return <MenuItem
                   key={id}
               >
                   {link.sub_nav_link._linkType == 'Link.web' ? <a href={link.sub_nav_link.url} target={"_blank"}>
                       <MenuLink>{link.sub_nav_link_label[0].text} </MenuLink>
                   </a>  :
                   <Link href={`/${link.sub_nav_link._meta.uid}`}>
                       <MenuLink>
                           <span>{link.sub_nav_link_label[0].text}</span>
                       </MenuLink>
                   </Link>
                   }
                </MenuItem>
            })}
            </MenuColumns>
            </MenuContent>
        </MenuWrapper>
    )
}

export default Submenu