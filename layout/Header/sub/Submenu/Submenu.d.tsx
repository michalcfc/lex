import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface Links {
    id: number
    name: string
    url: string
    icon?: IconDefinition
}

export interface SubmenuProps {
    links:  Links[]
    setMenuOpen: (arg: boolean) => void
}