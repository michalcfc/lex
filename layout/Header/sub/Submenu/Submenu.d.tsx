import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface subLinks {
    id: number
    name: string
    url: string
    icon?: IconDefinition
}

interface subLinksLabel {
    text: string
}

interface Links {
    sub_nav_link_label: subLinksLabel[];
    id: number
    name: string
    url: string
    subLinks: subLinks[]
    sub_nav_link: {
        _meta
        _linkType
        url
    }
    icon?: IconDefinition
}

export interface SubmenuProps {
    links:  Links[]
    setMenuOpen: (arg: boolean) => void
}