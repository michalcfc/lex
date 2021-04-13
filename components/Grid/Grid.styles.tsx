import styled from "styled-components"
import { space } from 'styled-system'
import { ReactElement } from "react"

type DataProps = {
    p?: number
    mt?: number
    rows?: number
    rowGap?: number
    columns?: string
    gridGap?: string
    alignItems?: string
    columnGap?: number
    autoColumns?: string
    autoFlow?: string
}

export const GridStyles = styled.div<DataProps>`
    ${space};
    display: grid;
    grid-gap: ${({gridGap}) => gridGap};
    row-gap: ${({rowGap}) => rowGap};
    column-gap: ${({columnGap}) => columnGap};
    align-items:  ${({alignItems}) => alignItems};
    grid-template-rows: ${({rows}) => rows};
    grid-template-columns: ${({columns}) => columns};
    grid-auto-columns:  ${({autoColumns}) => autoColumns};
    grid-auto-flow: ${({autoFlow}) => autoFlow};
    & a {
        text-decoration: none;
    }
`