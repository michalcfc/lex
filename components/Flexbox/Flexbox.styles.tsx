import styled from "styled-components"

type DataProps = {
    inline?: boolean
    vertical?: boolean
    wrap?: boolean
}

export const Flex = styled.div<DataProps>`
    display:  ${({inline}) => inline ? 'inline-flex' : 'flex' };
    flexDirection: ${({vertical}) => vertical ? "column" : "row"};
    flexWrap: ${({wrap}) => wrap ? "wrap" : "no-wrap"};
`