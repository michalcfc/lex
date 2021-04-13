import { DefaultTheme } from 'styled-components';
import colors from "../../utilis/colors.styles"
import spacing from "../../utilis/spacing.styles"
import fontSize from "../../utilis/fontSize.styles"

export const lightTheme: DefaultTheme = {
  background: '#fff',
  backgroundMain: "#fff",
  boxShadow: '0 15px 55px -5px rgba(9,31,67,.1)',
  boxShadowColor: '4px 4px 20px 0 rgba(103, 58, 183, 0.43)',
  body: '#f8fafd',
  text: '#212332',
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