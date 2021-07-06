import { DefaultTheme } from 'styled-components';

interface Font {
  family: string;
  color: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    body: string;
    font: Font;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: "#333",
  secondaryColor: "#666",
  body: "#fff",
  font: {
    family: "'Open Sans', sans-serif;",
    color: '#23272a',
  }
};

// export const darkTheme: DefaultTheme = {
//   primaryColor: "#fff",
//   secondaryColor: "#cacaca",
//   font: {
//     family: "'Open Sans', sans-serif;",
//   }
// };