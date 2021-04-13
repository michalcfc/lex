import styled from "styled-components";

type DataProps = {
}

export const ModalCloseIcon = styled.div<DataProps>`
  width: 100%;
  display: flex;
  font-size: 2rem;
  cursor: pointer;
  justify-content: flex-end;
`

export const ModalWrapper = styled.div<DataProps>`
    z-index: 100;
    margin: 0 auto;
    padding: 1.2rem;
    position: relative;
    box-shadow: ${({theme}) => theme.boxShadow};
    background: ${({theme}) => theme.colors.white};
`

export const ModalBackground = styled.div<DataProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75) !important;
  display: flex;
  align-items: center;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 99;
  padding: 1.2rem;
`;
