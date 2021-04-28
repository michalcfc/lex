export interface SectionProps {
    customPadding?: string
    title?: string
    background?: boolean
    style?: {}
    isFlex?: boolean
    isReverse?: boolean
    children?: React.ReactNode
    isVisible?: boolean
    className?: string
    link?: string
    description?: string
    ref?: React.RefObject<HTMLDivElement>;
    img?: string
    mt?: number
    mb?: number
    pt?: number
    pb?: number
    p?: number
    m?: number
    noRef?: boolean
}