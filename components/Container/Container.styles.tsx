import styled from "styled-components"
import { space, compose } from 'styled-system'

const widgetProps = compose(
    space,
)

type DataProps = {

}

export const ContainerStyles = styled.div<DataProps>`
    ${widgetProps};
    margin: 0 auto;
    @media (min-width: 800px) {
      width: 90vh;
    }
`