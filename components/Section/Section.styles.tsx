import styled from "styled-components";
import { space } from "styled-system"

type DataProps = {
    pt?: number
    pb?: number
    mt?: number
    mb?: number
    p?: number
    m?: number
    customPadding?: string
    background?: string
}

export const SectionWrapper = styled.section<DataProps>`
    ${space};
    width: 100%;
    position: relative;
    background-size: cover;
    content-visibility: auto;
    background-position: center;
    padding: ${({customPadding}) => customPadding ? customPadding : '4rem 0' };
    background-repeat: no-repeat;
    color:  ${({theme, background}) => background && theme.colors.white};
    background: ${({theme, background}) => background && `url(${background}) ${theme.colors.brand} fixed center center` };
`;

export const SectionTitle = styled.h2<DataProps>`
  @media (min-width: 800px) {
      font-size: 2rem
  }
`;

export const SectionContent = styled.div<DataProps>`
  z-index: 99;
  width: 80%;
  margin: 0 auto;
  font-size: 2.4rem;
  @media (max-width: 800px) {
  padding: 1rem;
   width: 100%;
  }
`;

export const SectionDescription = styled.div<DataProps>`
  width: 80%;
  margin-top: 1.6rem;
  font-size: 2.4rem;
`;