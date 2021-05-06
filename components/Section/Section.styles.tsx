import styled, { keyframes } from "styled-components";
import { space } from "styled-system"

import Image from 'next/image'

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
    background-repeat: no-repeat;
    padding: ${({customPadding}) => customPadding ? customPadding : '2rem 0' };
    color:  ${({theme, background}) => background && theme.colors.black};
    background: ${({theme, background}) => background ? `url(${background}) ${theme.colors.lightBlue} fixed center center` : `${theme.colors.white} url('/img/circles.png')`};
    @media (min-width: 800px) {
      padding: ${({customPadding}) => customPadding ? customPadding : '6rem 0' };
    }
`;

export const SectionTitle = styled.h2<DataProps>`
  position: relative;
  margin-bottom: 1rem;
  &:after {
  @media (min-width: 800px) {
      content: '';
      position: absolute;
      top: -1.4rem;
      left: 0;
      width: 4rem;
      border-bottom: 3px solid ${({theme}) =>  theme.colors.brand};
    };
  }
  `;
  // &:before {
    //   content: 'service';
    //   top: -4rem;
    //   position: absolute;
    //   font-size: 4rem;
    //   color: #eee;
    // }

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
  }
`;

export const SectionImg = styled.img<DataProps>`
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
  border-radius: .42rem;
  @media (min-width: 800px) {
    border-radius: .42rem;
    box-shadow: 0 26px 26px rgb(0 0 0 / 20%);
  }
`;

export const SectionDescription = styled.p<DataProps>`
  font-size: 1.2rem;
`;

export const SectionBody = styled.div<DataProps>`
@media (min-width: 800px) {
  ${({ isReverse }) => isReverse && `
    margin-right: 6rem;
  `}

  ${({ isReverse }) => !isReverse && `
    margin-left: 6rem;
`}
}

`


export const SectionFooter = styled.div<DataProps>`
  margin: 1rem 0;
`