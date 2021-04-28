import { DefaultTheme } from 'styled-components';
import colors from "../../utilis/colors.styles"
import spacing from "../../utilis/spacing.styles"
import fontSize from "../../utilis/fontSize.styles"

export const lightTheme: DefaultTheme = {
  background: '#fff',
  backgroundMain: '#f5f8fb',
  boxShadow: '0px 10px 30px 0px rgb(205 205 205 / 33%)',
  boxShadowColor: '4px 4px 20px 0 rgba(103, 58, 183, 0.43)',
  body: '#f5f8fb',
  text: '#212332',
  borderRadius: '.42rem',
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