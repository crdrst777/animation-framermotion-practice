import ReactDOM from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { darkTheme } from "./theme";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: "Pretendard", serif;
  /* background-color: ${(props) => props.theme.bgColor}; */
  color: black;
  line-height: 1.2;
  background:linear-gradient(135deg,#e09,#d0e);
}
a {
  text-decoration: none;
  color: inherit;
  &:link,&:visited{
  color: inherit;
  }
}
button{
  cursor: pointer;
  border: none;
  /* padding: 0; 
  margin: 0; */
  /* background-color: transparent; */
}
li {
  list-style: none;
}
`;

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
