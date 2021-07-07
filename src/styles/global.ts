import { createGlobalStyle } from 'styled-components';

import Utils from './utils';
import ResetCSS from './reset';

export const GlobalStyles = createGlobalStyle`
  ${Utils}
  ${ResetCSS}

  body {
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.color};
    background: ${({ theme }) => theme.body};
  }

  .users-list-grid {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
