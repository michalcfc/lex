import {RefObject} from "react";

export interface ModalProps {
  isOpen: boolean
  autoWidth?: boolean
  title: string
  text?: string
  isClose: () => void
  children?: React.ReactNode
}