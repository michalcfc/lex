import styled from "styled-components";

type DataProps = {
    homePage?: boolean
}

export const MainWrapper = styled.main<DataProps>`
  display: grid;
  grid-area: main;
  margin:  ${({homePage}) => !homePage && "0 auto"};
  background:  ${({theme}) => theme.backgroundMain};
  @media (min-width: 800px) {
    width: ${({homePage}) => !homePage && "80%"};
  }
`;

export const MainContainer = styled.div<DataProps>`
  margin:  ${({homePage}) => !homePage && "1rem 0"};
  @media (min-width: 800px) {
    padding: 2rem 0;
  }
`