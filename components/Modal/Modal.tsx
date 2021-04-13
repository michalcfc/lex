import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTimes
} from '@fortawesome/free-solid-svg-icons'

import {
    ModalWrapper,
    ModalBackground,
    ModalCloseIcon
} from "./Modal.styles"

import { ModalProps } from "./Modal.d"

const Modal: React.FC<ModalProps> = ({
    isOpen,
    isClose,
    children
 }) => (
  <>
      {isOpen
        && <ModalBackground onClick={isClose}>
         <ModalWrapper>
             <ModalCloseIcon>
                 <FontAwesomeIcon icon={faTimes} />
             </ModalCloseIcon>
              {children}
          </ModalWrapper>
      </ModalBackground>}
  </>
)

export default Modal;
