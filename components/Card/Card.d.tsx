import {IconDefinition, IconName} from '@fortawesome/fontawesome-common-types';

export interface CardProps {
  img?: string
  cardIcon?: IconDefinition
  columnSpan?: number
  flexContent?: boolean
  active?: boolean
  title?: string
  description?: string
  hoverEffect?: boolean
  hasRedirection?: boolean
  pointer?: boolean
  imgFlex?: boolean
  link?: string
  linkName?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  mt?: number
  mb?: number
  p?: number
  m?: number
}