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
            img: "/img/logos/large/telecom.png",
            url: ''
        },
        {
            id: 2,
            name: 'Lexell',
            img: "/img/logos/large/help_desk.png",
            url: ''
        },
        {
            id: 3,
            name: 'Lexell',
            img: "/img/logos/large/computer.png",
            url: ''
        },
        {
            id: 4,
            name: 'Lexell',
            img: "/img/logos/large/energy.png",
            url: ''
        },
        {
            id: 5,
            name: 'Lexell',
            img: "/img/logos/large/lexell.png",
            url: ''
        },
        {
            id: 6,
            name: 'Lexell',
            img: "/img/logos/large/smart.png",
            url: ''
        },
        {
            id: 7,
            name: 'Lexell',
            img: "/img/logos/large/building.png",
            url: ''
        },
    ]

    return (
        <Slider 
            items={logos} 
        />
    )
}

export default LogoCarousel;
