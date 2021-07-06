import React, {RefObject, useEffect, useRef, useState} from 'react';

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

const Modal = React.forwardRef<RefObject<any>, ModalProps>(({
    isOpen,
    isClose,
    children,
    title,
    text,
    autoWidth
 }) => {

    return (
        <>
        {isOpen
        && <ModalBackground onClick={isClose}>
            <ModalWrapper
                onClick={e => {
                    e.stopPropagation();
                }}
                autoWidth={autoWidth}
            >
                <ModalHeader>
                    {title}
                    <ModalCloseIcon
                        onClick={isClose}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </ModalCloseIcon>
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalWrapper>
        </ModalBackground>
        }
        </>
    )
})

export default Modal;
