import styled from "styled-components"

type DataProps = {
    inline?: boolean
    vertical?: boolean
    wrap?: boolean
    justify?: "space-between" | "space-around"
    align?: 'center' | 'flex-end'
}

export const Flex = styled.div<DataProps>`
  display:  ${({inline}) => inline ? 'inline-flex' : 'flex' };
  flex-direction: ${({vertical}) => vertical ? "column" : "row"};
  flex-wrap: ${({wrap}) => wrap ? "wrap" : "no-wrap"};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
`
