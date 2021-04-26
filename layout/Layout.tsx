import React from 'react';

import Main         from "./Main"
import Header       from "./Header"
import Footer       from "./Footer"
import Wrapper      from "./Wrapper"

import {
    faTv,
    faWifi,
    faUpload,
    faTools
} from "@fortawesome/free-solid-svg-icons";

import {
    faChromecast,
} from "@fortawesome/free-brands-svg-icons"


const Layout = ({children}) => {

    const menuLinks = [
        {
            id: 1,
            name: 'Usługi',
            hasSubmenu: true,
            url: '',
            subLinks: [
                {
                    id: 1,
                    icon: faWifi,
                    name: 'Internet',
                    url: '/network'
                },
                {
                    id: 2,
                    icon: faTv,
                    name: 'Telewizja',
                    url: '/television'
                },
                {
                    id: 3,
                    icon: faChromecast,
                    name: 'TV + Internet',
                    url: '/tv-network'
                },
                // {
                //     id: 3,
                //     icon: faTools,
                //     name: 'Usługi IT',
                //     url: '/service'
                // },
                // {
                //     id: 4,
                //     icon: faUpload,
                //     name: 'Transmisja danych',
                //     url: '/transmision'
                // },
            ]
        },
        {
            id: 2,
            name: 'O nas',
            hasSubmenu: false,
            url: "/about"
        },
        {
            id: 3,
            name: 'Światłowód',
            hasSubmenu: false,
            url: "/about"
        },
        {
            id: 4,
            name: "Kontakt",
            hasSubmenu: false,
            url: "/contact"
        }

    ]

    const footerLinks = [
    ]

    return (
       
        <Wrapper>
            <Header
                links={menuLinks}
                isMobile={children.props.isMobile}
            />
            <Main>
                {children}
            </Main>
            <Footer
                links={footerLinks}
            />
        </Wrapper>
        
    )
}

export default Layout