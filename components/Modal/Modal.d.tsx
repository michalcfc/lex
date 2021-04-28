export interface ModalProps {
  isOpen: boolean
  title: string
  text: string
  isClose: () => void
}