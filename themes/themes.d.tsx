import 'styled-components';

declare module 'styled-components' {

  
  export interface DefaultTheme {
    background: string;
    backgroundMain: string
    text: string;
    body: string;
    boxShadow: string
    boxShadowColor: string
    colors: {
      [el: string]: string
    }
    fontSize: {
      [el: string]: string
    }
    spacing: {
      [el: string]: string
    }
    buttonColor: {},
    buttonBackground: {}
  }
}