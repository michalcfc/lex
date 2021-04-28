import { DefaultTheme } from 'styled-components';
import colors from "../../utilis/colors.styles"
import spacing from "../../utilis/spacing.styles"
import fontSize from "../../utilis/fontSize.styles"

export const darkTheme: DefaultTheme = {
  background: '#fff',
  backgroundMain: "#fff",
  boxShadow: '0px 10px 30px 0px rgb(205 205 205 / 33%)',
  boxShadowColor: '4px 4px 20px 0 rgba(103, 58, 183, 0.43)',
  body: '#f5f8fb',
  text: '#212332',
  borderRadius: '.42rem',
  buttonSize: {
    default: '.75rem 1.2rem',
    secondary: '.75rem 1.2rem',
    hero:  '1rem 1.75rem',
    cookie: '.4rem 1.75rem',
  },
  buttonColor: {
    colors,
  },
  buttonBackground: {
    colors,
  },
  colors,
  spacing,
  fontSize
}