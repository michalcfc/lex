import styled, { keyframes } from "styled-components";
import { lighten } from 'polished';

type DataProps = {

}


const bounce = keyframes`
   0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
`;

const fadeIn = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
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

export const HeroWrapper = styled.picture`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.brand};
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("img/lex2.png");
    @media (min-width: 800px) {
      min-height: 44rem;
    }
`;

export const HeroContentWrapper = styled.div`
  line-height: 1.2;
  padding: 2rem 0;
  display: flex;
  height: 100%;
  position: relative;
  align-items: center;
`

export const HeroContentLeft = styled.div`
  flex: 1 0 0%;
  animation: ${fadeIn} 1s ease-in-out;
  white-space: pre-wrap;
  @media (min-width: 800px) {
      flex: 0 0 45%;
    }
`;

export const HeroTitle = styled.h2`
    font-weight: 700;
    margin-bottom: 1rem;
    @media (min-width: 800px) {
        font-size: 3.2rem;;
    }
`


export const HeroImg = styled.img<DataProps>`
  object-fit: cover;
  max-width: 100%;
  object-position: bottom right;
`

export const HeroDescription = styled.p`
    line-height: 1.8;
    @media (min-width: 800px) {
      font-size: 1.2rem;
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
    right: 0%;
    &:hover {
        &:before {
            content: 'Telewizja';
        }
    }
`

export const HeroIconSecond = styled(HeroIcon)`
    top: 38%;
    right: 8%;
     &:hover {
        &:before {
            content: 'Internet';
        }
    }
`

export const HeroIconThird = styled(HeroIcon)`
    top: 32%;
    right: -12%;
    &:hover {
        &:before {
            content: 'Serwis';
        }
    }
`
export const HeroButton = styled.div`
    margin-top: 1.6rem;
`
    
  export const StyledLink = styled.a`
    font-size: 2rem;
    padding: .8rem 1rem;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: ${({theme}) => lighten(0.1, theme.colors.brand)};
    &:hover {
      background: ${({theme}) => lighten(0.2, theme.colors.brand)};
    }

`

export const StyledIcon = styled.div`
    background: #fff;
    padding: .6rem;
    border-radius: 50px;
    margin-right: 1rem;
`
    
export const PhoneNumber = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`


