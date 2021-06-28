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

    function chunkArrayInGroups(arr, size) {
        let result = [];
        let pos = 0;
        while (pos < arr.length) {
            result.push(arr.slice(pos, pos + size));
            pos += size;
        }
        return result;
        }

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
                   {link.sub_nav_link._meta.uid == 'LEXELL telecom' ? <a href="http://telecom.lexell.pl" target={"_blank"}>
                       <MenuLink>{link.sub_nav_link._meta.uid} </MenuLink>
                   </a>  :
                   <Link href={link.sub_nav_link._meta.uid}>
                       <a>
                       <MenuLink>
                           {/* <FontAwesomeIcon icon={link.icon} /> */}
                           <span>{link.sub_nav_link._meta.uid}</span>
                       </MenuLink>
                       </a>
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