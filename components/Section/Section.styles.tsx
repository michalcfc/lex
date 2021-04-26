import { url } from "node:inspector";
import styled, { keyframes } from "styled-components";
import { space } from "styled-system"

type DataProps = {
    pt?: number
    pb?: number
    mt?: number
    mb?: number
    p?: number
    m?: number
    customPadding?: string
    background?: boolean
    isFlex?: boolean
    isReverse?: boolean
    isVisible?: boolean
}

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

export const SectionWrapper = styled.section<DataProps>`
    ${space};
    width: 100%;
    position: relative;
    background-size: cover;
    visibility: ${({isVisible}) => isVisible ? 'visible' : 'hidden' };
    transition: opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out;
    will-change: opacity, transform, visibility;
    margin: 0 auto;
    background-position: center;
    padding: ${({customPadding}) => customPadding ? customPadding : '4rem 0' };
    background-repeat: no-repeat;
    color:  ${({theme, background}) => background && theme.colors.black};
    background: ${({theme, background}) => background ? `url(${background}) ${theme.colors.lightBlue} fixed center center` : `url('/img/circles.png')`};
`;

export const SectionTitle = styled.h2<DataProps>`
  margin: 1rem 2rem;
  @media (min-width: 800px) {
      font-size: 2rem
  }
`;

export const SectionContent = styled.div<DataProps>`
  z-index: 99;
  font-size: 2.4rem;
  display: ${({isFlex}) => isFlex && 'flex' };
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${({isReverse}) => isReverse && 'row-reverse;' };

  @media (min-width: 800px) {
    flex-wrap: nowrap;
    width: 100%;
    padding: 1rem;
  }
`;

export const SectionImg = styled.img<DataProps>`
  border-radius: 63% 37% 30% 70% / 50% 45% 55% 50%;
`;

export const SectionDescription = styled.p<DataProps>`
  margin: 1rem 2rem;
  font-size: 1.2rem;
`;