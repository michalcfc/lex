import styled, { keyframes } from "styled-components";

type DataProps = {
    display?: "block" | "inline-block"
  }

export const LoaderStyles = styled.div<DataProps>`
    display: flex;
    justify-content: center;
`;