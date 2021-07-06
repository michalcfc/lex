import {IconName, IconDefinition} from "@fortawesome/fontawesome-common-types";

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
    hasSubmenu: boolean
    subLinks?: subLinks[]
  }

export interface MenuProps {
    isOpen: boolean
    setMenuOpen: (arg: boolean) => void
}