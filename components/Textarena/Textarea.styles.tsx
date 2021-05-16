import styled from "styled-components";

type DataProps = {
}

export const TextareaWrapper = styled.div<DataProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0.75rem 0px;
`

export const TextareaLabel = styled.label<DataProps>`
  font-weight: normal;
  opacity: 0.75;
  width: fit-content;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, -5rem, 0);
  transition: 200ms ease all;
  margin: 0 ${({theme}) => theme.spacing.md};
  background: ${({theme}) => theme.colors.white};
`

export const TextareaStyle = styled.textarea<DataProps>`
      font-size: 100%;
      text-shadow: none;
      padding: .75rem 1rem;
      border-radius: 0.4rem;
      border: 1px solid  ${({theme}) => theme.colors.black};
    
      &:focus {
        outline: 0;
      }
    
      & + ${TextareaLabel} {
        opacity: 1;
        padding: 0 ${({theme}) => theme.spacing.sm};
        transform: scale(0.8) translate3d(0, -8.4rem, 0);
      }
`;

