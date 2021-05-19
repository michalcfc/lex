import React, {RefObject, useEffect, useRef, useState} from 'react';

import Slider from "@components/Slider"

import {

} from "./LogoCarousel.styles"

import { 
    LogoCarouselProps 
} from "./LogoCarousel.d"

const LogoCarousel: React.FC<LogoCarouselProps> = ({

 }) => {

    const logos = [
        {
            id: 1,
            name: 'Lexell',
            img: "/img/logos/large/internet.png",
            url: '/internet'
        },
        {
            id: 2,
            name: 'Lexell',
            img: "/img/logos/large/help_desk.png",
            url: '/helpDesk'
        },
        {
            id: 3,
            name: 'Lexell',
            img: "/img/logos/large/computer.png",
            url: '/computer'
        },
        {
            id: 4,
            name: 'Lexell',
            img: "/img/logos/large/energy.png",
            url: '/energy'
        },
        {
            id: 5,
            name: 'Lexell',
            img: "/img/logos/large/smart.png",
            url: '/smart'
        },
        {
            id: 6,
            name: 'Lexell',
            img: "/img/logos/large/building.png",
            url: '/building'
        },
    ]

    return (
        <Slider 
            items={logos} 
        />
    )
}

export default LogoCarousel;
