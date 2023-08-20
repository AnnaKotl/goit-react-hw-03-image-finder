import { createGlobalStyle, StyleSheetManager } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: ${props => (props.shouldUpdateHeight ? '100vh' : 'auto')};
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-style: normal;
    line-height: 1.5;
    color: #060814;
    background-image: radial-gradient(circle at 50% -20.71%, #fff56b 0, #fff866 6.25%, #fdfa63 12.5%, #e7fb61 18.75%, #d0fb62 25%, #b5fa65 31.25%, #97f86a 37.5%, #73f670 43.75%, #3cf278 50%, #00ee82 56.25%, #00ea8f 62.5%, #00e69d 68.75%, #00e2ad 75%, #00dfbe 81.25%, #00dbd1 87.5%, #00d8e3 93.75%, #00d6f6 100%);
    background-attachment: fixed;
}

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
  margin: 0;
  }
  ul,
  li {
  margin: 0;
  padding: 0;
  list-style: none;
  }
  img {
  display: block;
  max-width: 100%;
  height: auto;
  }

`;

export const StyledApp = ({ children }) => (
  <StyleSheetManager shouldForwardProp={prop => !prop.startsWith('show')}>
    {children}
  </StyleSheetManager>
);