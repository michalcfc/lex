import styled from "styled-components"
import { space, compose } from 'styled-system'

const widgetProps = compose(
    space,
)

type DataProps = {

}

// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`

// Function for calculating value for width
const getWidth = (value) => {
  if (!value) return

  let width = value / 12 * 100
  return `width: ${width}%;`
}

// Function for calculating value for flex
const getFlex = (value) => {
  if (!value) return

  let flex = value / 12 * 100
  return `flex: 0 0 ${flex}%;`
}

export const ContainerStyles = styled.div<DataProps>`
    ${widgetProps};
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    // Breakpoint for tablets
    @media (min-width: 576px) {
      max-width: ${remy(540)};
    }
  
    // Breakpoint for small desktops
    @media (min-width: 768px) {
      max-width: ${remy(720)};
    }
  
    // Breakpoint for medium desktops
    @media (min-width: 992px) {
      max-width: ${remy(9600)};
    }
  
    // Breakpoint for large desktops and HD devices
    @media (min-width: 1200px) {
      max-width: ${remy(1140)};
    }

    @media (min-width: 1440) {
        max-width: ${remy(1420)};
      }
`