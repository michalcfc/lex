interface Links {
    id: number
    name: string,
    hasSubmenu: boolean
}

export interface MenuProps {
    links: Links[]
}