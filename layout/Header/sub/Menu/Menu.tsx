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


const Menu: React.FC<MenuProps> = ({
    links,
}) => {

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

    console.log(homeDoc)

    return (
        <MenuWrapper>

            {homeDoc?.nav.map(link => {
                return <MenuItem
                    key={link.id}
                    onMouseEnter={() => {
                        setSubemnuId(link.primary.label[0].text)
                        setMenuOpen(true)
                    }}
                >
                      {/*    && link.id == subemnuId*/}
                                {/*        ? <FontAwesomeIcon icon={faChevronUp} />*/}
                                {/*        : <FontAwesomeIcon icon={faChevronDown} />*/}
                                {/*}</>*/}
                                {link.primary.label[0].text === "Światłowód"
                                    ? <a href={link.primary.label[0].text} target="_blank" rel={'noopener'} >Światłowód</a>
                                    : <Link href={link.primary.label[0].text}>
                                        <a>
                                            {link.primary.label[0].text}
                                            {link.fields.map(field => {
                                                console.log(field.sub_nav_link._meta?.uid)
                                                return <></>
                                            })}
                                            {link.primary.submenu
                                            && isMenuOpen
                                            && link.primary.label[0].text == subemnuId
                                            && <Submenu
                                                links={link.fields}
                                                setMenuOpen={setMenuOpen}
                                            />}
                            </a>
                        </Link>}
                </MenuItem>
            })}

            {/*{links.map((link) => {*/}
            {/*   return <MenuItem*/}
            {/*        key={link.id}*/}
            {/*        onMouseEnter={() => {*/}
            {/*            setSubemnuId(link.id)*/}
            {/*            setMenuOpen(true)*/}
            {/*        }}*/}
            {/*        // onMouseLeave={() => {*/}
            {/*        //     setSubemnuId(link.id)*/}
            {/*        //     setMenuOpen(false)*/}
            {/*        // }}*/}
            {/*        >*/}
            {/*        {link.name === "Światłowód"*/}
            {/*        ? <a href={link.url} target="_blank" rel={'noopener'} >Światłowód</a>*/}
            {/*        : <Link href={link.url}>*/}
            {/*           <a>*/}
            {/*           {link.name}*/}
            {/*           {link.hasSubmenu */}
            {/*            &&  <>{*/}
            {/*                isMenuOpen*/}
            {/*                    && link.id == subemnuId */}
            {/*                        ? <FontAwesomeIcon icon={faChevronUp} /> */}
            {/*                        : <FontAwesomeIcon icon={faChevronDown} />*/}
            {/*            }</>*/}
            {/*            }*/}
            {/*           </a>*/}
            {/*        </Link>}*/}
            {/*    {link.hasSubmenu*/}
            {/*        && isMenuOpen*/}
            {/*        && link.id == subemnuId*/}
            {/*        && <Submenu*/}
            {/*            links={link.subLinks}*/}
            {/*            setMenuOpen={setMenuOpen}*/}
            {/*        />}*/}
            {/*    </MenuItem>*/}
            {/*})}*/}
        </MenuWrapper>
    )
}

export default Menu