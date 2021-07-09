import React, {useEffect, useState} from 'react';
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
import {queryMenuContent} from "../../../../utilis/prismicQueries";


const Menu: React.FC<MenuProps> = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const [subemnuId, setSubemnuId] = useState(null)

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
        <MenuWrapper>

            {homeDoc?.nav.map((link, id) => {
                return <>{!link.primary.link?.url?.includes("tel") &&
                <MenuItem
                    key={id}
                    onMouseEnter={() => {
                        setSubemnuId(link.primary.label[0].text)
                        setMenuOpen(true)
                    }}
                >
                    <Link href={link.primary.link?._meta
                        ? `/${link.primary.link?._meta?.uid}`
                        : '/'
                    }
                    >
                        <a>
                            {link.primary.label[0].text}
                            {link.primary.submenu
                            && <>{
                                isMenuOpen
                                && link.primary.label[0].text == subemnuId
                                    ? <FontAwesomeIcon icon={faChevronUp}/>
                                    : <FontAwesomeIcon icon={faChevronDown}/>
                            }
                            </>
                            }
                        </a>
                    </Link>
                    {link.primary.submenu
                    && isMenuOpen
                    && link.primary.label[0].text == subemnuId
                    && <Submenu
                        links={link.fields}
                        setMenuOpen={setMenuOpen}
                    />}
                </MenuItem>
            }</>
            })}

        </MenuWrapper>
    )
}

export default Menu