import { DefaultTheme } from 'styled-components';

interface Font {
  family: string;
  color: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    font: Font;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: "#333",
  secondaryColor: "#666",
  font: {
    family: "'Open Sans', sans-serif;",
    color: '#000000',
  }
};

// export const darkTheme: DefaultTheme = {
//   primaryColor: "#fff",
//   secondaryColor: "#cacaca",
//   font: {
//     family: "'Open Sans', sans-serif;",
//   }
// };