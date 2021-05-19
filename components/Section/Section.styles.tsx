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
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: ${({isReverse}) => isReverse && 'row-reverse;' };
  @media (min-width: 800px) {
    flex-wrap: nowrap;
    width: 100%;
  }
`;

export const SectionFigure = styled.figure<DataProps>`
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: rgb(0 0 0 / 20%) 0px 26px 26px;
  @media (min-width: 800px) {
    margin-bottom: 0;
    border-radius: .42rem;
  }
  & > img {
    width: 100%;
    transform: scale(1);
    transition: all ease-in-out 0.3s;
    @media (min-width: 800px) {
      width: auto;
    }
  }
  &:hover {
    cursor: pointer;
    & > img {
      transform: scale(1.1);
    }
    &:before {
      background: ${({theme}) => theme.colors.brand};
      content: "";
      height: 100%;
      left: 0;
      opacity: .5;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }
`

export const SectionImg = styled.img<DataProps>`
  border-radius: .42rem;
  display: block;
  @media (min-width: 800px) {
    margin-bottom: 0;
    border-radius: .42rem;
  }
`;

export const AbsoluteContent = styled.div`
  position: absolute;
  top: 0%;
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 99;
  left: 0%;
  &:hover {
    opacity: 1;
  }

`

export const AbsoluteText = styled.img<DataProps>`
  height: 50%;
  width: 50%;
`

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

export const SectionLinks = styled.div<DataProps>`
  line-height: 1.8;
  //column-count: 2;
`


export const SectionFooter = styled.div<DataProps>`
  margin: 1rem 0;
`