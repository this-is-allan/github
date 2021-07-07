import { css } from 'styled-components';

const ResetCSS = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  textarea,
  select,
  option,
  table,
  th,
  td,
  blockquote,
  hr,
  button {
    margin: 0;
    padding: 0;
    appearance: none;
  }

  header,
  footer,
  article,
  nav,
  section {
    display: block;
  }

  html {
    scroll-behavior: smooth;
    text-size-adjust: none;
    word-wrap: break-word;
  }

  input,
  textarea,
  button,
  a,
  select {
    outline: 0;
    appearance: none;
  }

  input,
  textarea,
  a,
  select {
    margin: 0;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  button {
    border: 0;
    cursor: pointer;
    background: transparent;
  }

  img {
    border: 0;
    font-size: 0;
  }

  textarea {
    resize: none;
  }

  a {
    text-decoration: none;
  }

  iframe {
    overflow: hidden;
  }

  body,
  textarea,
  input,
  select,
  option,
  textarea,
  input,
  select,
  option,
  button {
    font-family: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  small {
    font-size: inherit;
  }
`;

export default ResetCSS;
