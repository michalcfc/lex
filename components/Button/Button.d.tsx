export type IconPosition =
    | 'left'
    | 'center'
    | 'right';

export type ButtonVariants =
    | 'icon'
    | 'success'
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'danger'
    | 'ghost'
    | 'white'
    | 'link'
    | 'text';

export type ButtonSizes =
    | 'link'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl';

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