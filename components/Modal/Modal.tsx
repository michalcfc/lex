import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTimes
} from '@fortawesome/free-solid-svg-icons'

import {
    ModalWrapper,
    ModalBackground,
    ModalCloseIcon,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "./Modal.styles"

import { ModalProps } from "./Modal.d"

const Modal: React.FC<ModalProps> = ({
    isOpen,
    isClose,
    children,
    title,
    text,
 }) => (
  <>
      {isOpen
        && <ModalBackground onClick={isClose}>
         <ModalWrapper>
             <ModalHeader>
                {title}
                <ModalCloseIcon>
                    <FontAwesomeIcon icon={faTimes} />
                </ModalCloseIcon>
             </ModalHeader>
             <ModalBody>
              {children}
             </ModalBody>
          </ModalWrapper>
      </ModalBackground>}
  </>
)

export default Modal;
