import styled from "styled-components";

export const SelectWrapper = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      margin: 0.75rem 0px;
`;
    
export const SelectLabel = styled.label`
  font-weight: normal;
  opacity: 0.75;
  width: fit-content;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, -3.5rem, 0);
  transition: 200ms ease all;
  margin: 0 ${({theme}) => theme.spacing.md};
  background: ${({theme}) => theme.colors.white};
`;
    
export const SelectStyle = styled.select`
  font-size: 100%;
  text-shadow: none;
  padding: .75rem 1rem;
  border-radius: 0.4rem;
  background:  ${({theme}) => theme.colors.white};;
  border: 1px solid  ${({theme}) => theme.colors.black};

  &:focus {
    outline: 0;
  }

  &:focus + ${SelectLabel} {
    opacity: 1;
    padding: 0 ${({theme}) => theme.spacing.sm};
    transform: scale(0.8) translate3d(0, -4rem, 0);
  }
`;