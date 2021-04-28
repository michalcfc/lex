import styled from "styled-components";

type DataProps = {
}

export const ModalCloseIcon = styled.div<DataProps>`
  cursor: pointer;
`


export const ModalHeader = styled.div<DataProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d3dce0;
  padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
`

export const ModalBody = styled.div<DataProps>`
  padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};;
`

export const ModalFooter = styled.div<DataProps>`
  padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};;
`

export const ModalWrapper = styled.div<DataProps>`
    z-index: 100;
    margin: 0 auto;
    width: 520px;
    position: relative;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: ${({theme}) => theme.boxShadow};
    background: ${({theme}) => theme.colors.white};
`

export const ModalBackground = styled.div<DataProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(12,20,28,.74902) !important;
  display: flex;
  align-items: center;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 99;
  padding: 1.2rem;
`;
