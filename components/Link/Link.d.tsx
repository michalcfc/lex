import { LinkProps } from 'next/link';
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';
import { CSSProperties } from 'styled-components';
import { ButtonSizes, ButtonVariants } from '@components/Button/Button.d';

export interface CustomProps {
  size?: ButtonSizes
  name?: string
  type?: 'button'
  isAbsolute?: boolean
  variant?: ButtonVariants
  children?: JSX.Element
}

export type LinkD =
    CustomProps &
    SpaceProps &
    LinkProps &
    PositionProps &
    TypographyProps &
    LayoutProps &
    Pick<CSSProperties,
    | 'textDecoration'
    >;
