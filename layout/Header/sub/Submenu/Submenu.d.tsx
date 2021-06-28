import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface subLinks {
    id: number
    name: string
    url: string
    icon?: IconDefinition
}

interface Links {
    id: number
    name: string
    url: string
    subLinks: subLinks[]
    sub_nav_link: {
        _meta
    }
    icon?: IconDefinition
}

export interface SubmenuProps {
    links:  Links[]
    setMenuOpen: (arg: boolean) => void
}