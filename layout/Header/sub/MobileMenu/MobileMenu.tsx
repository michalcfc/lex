import React, { useState } from 'react';
import {
    MenuWrapper,
    MenuHeader,
    ManuContent,
    MenuItem,
    Overlay,
    LinkStyled,
    CloseBtn
} from "./MobileMenu.styles"

import Link from 'next/link'

import { MenuProps } from "./MobileMenu.d"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {HeaderTopInfoItem} from "../../Header.styles";

const MobileMenu: React.FC<MenuProps> = ({
    links,
    isOpen,
     setMenuOpen
}) => {

    return (
        <>
            <CloseBtn onClick={() => setMenuOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} />
            </CloseBtn>
        {isOpen &&
            <>
            <Overlay/>
        <MenuWrapper>
            <MenuHeader>
                 <CloseBtn onClick={() => setMenuOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseBtn>
            </MenuHeader>
            <ManuContent>
                <ul>
                {links.map(link => (
                    <>
                    {link.subLinks && link.subLinks.map(sub => (
                        <MenuItem>
                            <LinkStyled key={sub.id} href={`${sub.url}`}>
                                {sub.name}
                            </LinkStyled>
                        </MenuItem>
                    ))}
                    <MenuItem>
                        <LinkStyled key={link.id}  href={`${link.url}`}>
                            {link.name}
                        </LinkStyled>
                    </MenuItem>
                    </>
                ))}
                <MenuItem>
                    <LinkStyled href="tel:+48516178131">
                        +48 516-178-131
                    </LinkStyled>
                </MenuItem>
                </ul>

            </ManuContent>
        </MenuWrapper>
            </>
            }
        </>
    )
}

export default MobileMenu