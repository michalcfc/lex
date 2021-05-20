
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 1rem;
      @media (max-width: 87em) {
        font-size: .875rem;
      }
    }
    ul {
      padding: 0;
    }
  `