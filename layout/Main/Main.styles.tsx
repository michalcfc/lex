import styled from "styled-components";

type DataProps = {
    homePage?: boolean
}

export const MainWrapper = styled.main<DataProps>`
  display: grid;
  grid-area: main;
`;

export const MainContainer = styled.div<DataProps>`
  margin:  ${({homePage}) => !homePage && "4rem 0"};
`