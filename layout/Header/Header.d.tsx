import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface subLinks {
    id: number
    name: string
    url: string
    icon?: IconDefinition
}

interface Links {
    id: number
    url: string
    name: string
    hasSubmenu: boolean
    subLinks?: subLinks[]
}

export interface HeaderProps {
    links: Links[]
    isMobile: boolean
}