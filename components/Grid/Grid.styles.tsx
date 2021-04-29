import { space } from 'styled-system'
import styled from "styled-components"

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
    customMargin?: number
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
    margin-top: ${({customMargin}) => `${customMargin / 2}rem`};
    & a {
        text-decoration: none;
    }
    @media (min-width: 800px) {
        margin-top: ${({customMargin}) => `${customMargin}rem`}
      }
`