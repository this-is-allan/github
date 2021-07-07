import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.color};
    background: ${({ theme }) => theme.body};
  }

  a {
    text-decoration: none;
  
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
   }
  }

  .users-list-grid {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
