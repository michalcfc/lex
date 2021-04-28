import 'styled-components';

declare module 'styled-components' {

  
  export interface DefaultTheme {
    background: string;
    backgroundMain: string
    text: string;
    body: string;
    boxShadow: string
    borderRadius: string
    boxShadowColor: string
    buttonSize: {
      [el: string]: string
    }
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