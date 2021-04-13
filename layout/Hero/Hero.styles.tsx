import styled, { keyframes } from "styled-components";
import { lighten } from 'polished';

const bounce = keyframes`
   0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
`;

export const HeroWrapper = styled.picture`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 46rem;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("img/bg.jpg");
`;

export const HeroContentWrapper = styled.div`
    width: 80%;
    display: flex;
    padding: 1rem;
    line-height: 1.2;
    position: relative;
    align-items: center;
    color: ${({theme}) => theme.colors.black};
`

export const HeroContentLeft = styled.div`
    flex: 0 0 50%;
    white-space: pre-wrap;
      @media (max-width: 800px) {
        flex: 1 0 0%;
      }
`;

export const HeroTitle = styled.h2`
    line-height: 1.4;
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({theme}) => theme.colors.brand};
      @media (max-width: 800px) {
        font-size: 2.375rem;
      }
`

export const HeroDescription = styled.p`
    line-height: 1.8;
    font-size: 1.2rem;
     @media (max-width: 800px) {
        font-size: 1.4rem;
      }
`

export const HeroContentRight = styled.div`
  max-width: 100%;
  flex: 0 1 50%;
  position: relative;
  display: flex;
  align-self: flex-end;
  @media (max-width: 800px) {
    display: none;
  }
`

export const HeroIcon = styled.div`
    z-index: 1;
    padding: 1rem;
    height: 1rem;
    position: absolute;
    border-radius: 1.26rem;
   color:  ${({theme}) => theme.colors.white};
    // background:  ${({theme}) => theme.colors.blue};
    // box-shadow: ${({theme}) => theme.boxShadow};
    animation: ${bounce} 3s ease-in-out 0s infinite alternate;
    &:hover {
      cursor: pointer;
        &:before {
            top: -20px;
            left: 16px;
            border-radius: .62rem;
            padding: .62rem;
            content: '';
            font-size: .72rem;
            position: absolute;
            background:  ${({theme}) => theme.colors.black};
            color: ${({theme}) => theme.colors.white};
        }
    }
`

export const HeroIconFirst = styled(HeroIcon)`
    top: 20%;
    right: 15%;
    &:hover {
        &:before {
            content: 'Telewizja';
        }
    }
`

export const HeroIconSecond = styled(HeroIcon)`
    top: 40%;
    right: 25%;
     &:hover {
        &:before {
            content: 'Internet';
        }
    }
`

export const HeroIconThird = styled(HeroIcon)`
    top: 35%;
    right: 6%;
    &:hover {
        &:before {
            content: 'Serwis';
        }
    }
`

