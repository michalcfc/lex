export interface FlexProps {
    inline?: boolean
    vertical?: boolean
    wrap?: boolean
    flex?: boolean
    justify?: "space-between" | "space-around"
    align?: 'center' | 'flex-end'
    children: React.ReactNode
}