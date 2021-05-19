export interface ButtonProps {
  name: string
  color?: string
  children?: string
  hero?: boolean
  variant?: string
  buttonBackground?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick: React.MouseEventHandler<HTMLElement>
}