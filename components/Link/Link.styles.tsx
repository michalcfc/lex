import styled, { css, CSSProperties } from 'styled-components';
import { mapToTheme as theme } from 'styled-map';

import {
  space,
  color,
  system,
  variant,
  compose,
  fontSize,
  fontWeight,
  buttonStyle,
  PositionProps,
  SpaceProps,
  FontWeightProps,
  FontSizeProps,
  ColorProps,
} from 'styled-system';
import Link from 'next/link';
import { ButtonSizes, ButtonVariants } from '@components/Button/Button.d';

const buttonSize = variant({
  prop: 'size',
  key: 'buttons.size',
});

type CustomProps = {
  type?: 'button'
  size?: ButtonSizes
  isAbsolute?: boolean
  variant?: ButtonVariants
};

export type LinkProps =
    PositionProps &
    SpaceProps &
    ColorProps &
    FontSizeProps &
    FontWeightProps &
    CustomProps &
    Pick<CSSProperties,
    | 'textDecoration'
    >;

const linkStyledSystem = compose(
  space,
  color,
  fontSize,
  fontWeight,
  system({
    textDecoration: true,
  }),
);

const buttonStyledSystem = compose(
  buttonSize,
  buttonStyle,
);

export const LinkStyle = styled(Link)<LinkProps>`
  ${linkStyledSystem};
  cursor: pointer;
  line-height: 1.25rem;
  text-decoration: none;

  ${({ type }) => type === 'button' && css`
    display: grid;
    place-items: center;
    border-radius: .42rem;
    ${buttonStyledSystem};
  `}

  ${({ isAbsolute }) => isAbsolute && css`
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
  `}

  &:hover {
    background:  ${({ type }) => (type === 'button'
            && theme('buttons.backgroundHover', 'variant'))};
    text-decoration: ${({ textDecoration }) => (textDecoration === 'underline' ? 'underline' : 'none')};
  }
`;

LinkStyle.defaultProps = {
  size: 'sm',
  variant: 'text',
};
