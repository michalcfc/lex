import styled, { keyframes } from "styled-components";
// import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
  display?: "block" | "inline-block"
}

const bouncingLoader = keyframes`
    to {
        opacity: 0.1;
        transform: translate3d(0, -1rem, 0);
    }
`

export const LoaderStyles = styled.div<DataProps>`
    display: flex;
    justify-content: center;
`;

export const LoaderDot = styled.div<DataProps>`
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: #663399;
    border-radius: 50%;
    animation: ${bouncingLoader} 0.6s infinite alternate;
    :nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.4s;
    }
`;