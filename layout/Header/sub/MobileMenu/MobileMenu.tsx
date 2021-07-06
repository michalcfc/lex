import React, {useEffect, useState} from 'react';
import {
    MenuWrapper,
    MenuHeader,
    ManuContent,
    MenuItem,
    Overlay,
    LinkStyled,
    CloseBtn
} from "./MobileMenu.styles"

import { MenuProps } from "./MobileMenu.d"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
import {queryMenuContent} from "../../../../utilis/prismicQueries";

const MobileMenu: React.FC<MenuProps> = ({
    isOpen,
     setMenuOpen
}) => {

    const [homeDoc, setHomeDoc] = useState(null);
    const [notFound, toggleNotFound] = useState(false);

    // Fetch the Prismic initial Prismic content on page load
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryMenuContent();
            const homeDocContent = queryResponse.data.allNavigations.edges[0].node;
            if (homeDocContent) {
                setHomeDoc(homeDocContent);
            } else {
                toggleNotFound(true);
            }
        };
        fetchPrismicContent();
    }, []);

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
                {homeDoc?.nav.map(link => (
                    <>
                    {link.primary.submenu && link.fields.map((sub, id) => (
                        <>
                        {sub.sub_nav_link._linkType == 'Link.web'
                            ?  <MenuItem>
                                    <LinkStyled href={sub.sub_nav_link.url} target={"_blank"}>
                                    {sub.sub_nav_link_label[0].text}
                                 </LinkStyled>
                            </MenuItem>
                            :
                        <MenuItem>
                            <LinkStyled key={id} href={`/${sub.sub_nav_link._meta?.uid}`}>
                                {sub.sub_nav_link_label[0].text}
                            </LinkStyled>
                        </MenuItem>
                        }
                        </>
                    ))}
                    {link.primary.link?._linkType == 'Link.web'
                        ?  <MenuItem>
                            <LinkStyled href={link.primary.link.url} target={"_blank"}>
                                {link.primary.label[0].text}
                            </LinkStyled>
                        </MenuItem>
                        :
                    <MenuItem>
                        <LinkStyled
                            key={link.id}
                            href={link.primary.link?._meta ? `/${link.primary.link._meta.uid}` : '/'}
                        >
                            {link.primary.label[0].text}
                        </LinkStyled>
                    </MenuItem>}
                    </>
                ))}
                </ul>

            </ManuContent>
        </MenuWrapper>
            </>
            }
        </>
    )
}

export default MobileMenu