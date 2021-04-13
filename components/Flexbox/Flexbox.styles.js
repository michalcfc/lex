import styled from "styled-components"

export const Flex = styled.div`
    display: props.inline ? "inline-flex" : "flex",
    flexDirection: props.vertical ? "column" : "row",
    flexWrap: props.wrap ? "wrap" : "no-wrap",
`