import styled, { keyframes } from "styled-components";
// import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
  display?: "block" | "inline-block"
}

const ripple = keyframes`
  0% {
    top: 32px;
    left: 32px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    opacity: 0;
  }
`

export const LoaderWrapper = styled.div<DataProps>`
  display: grid;
  place-items: center;
`;

export const LoaderStyles = styled.div<DataProps>`
  position: relative;
  width: 64px;
  height: 64px;
`;

export const LoaderCircle = styled.div<DataProps>`
  position: absolute;
  border: 4px solid ${({theme}) => theme.colors.brand};
  border-radius: 50%;
  animation: ${ripple} 1s ease-out infinite;
  :nth-child(2) {
    animation-delay: -0.5s;
  }
`