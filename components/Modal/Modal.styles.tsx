import styled from "styled-components";
import {RefObject} from "react";

type DataProps = {
    autoWidth?: boolean
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

export const ModalBackground = styled.div<DataProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalWrapper = styled.div<DataProps>`
  margin: 0 auto;
  width: ${({autoWidth}) => autoWidth ? 'auto' : '520px'};
  border-radius: ${({theme}) => theme.borderRadius};
  box-shadow: ${({theme}) => theme.boxShadow};
  background: ${({theme}) => theme.colors.white};
`
