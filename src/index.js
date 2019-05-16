import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "antd/dist/antd.css";

// import "./styles.css";
import { themeLight, themeDark } from "./theme";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-color: #0A0908;
    font-family: 'Roboto', sans-serif;
  }
`;

function Main() {
  const [themeSelected, setTheme] = useState("dark");

  const onThemeChange = checked => setTheme(checked ? "light" : "dark");

  return (
    // <div className="wrapper">
    //   <div>1</div>
    //   <div>2</div>
    //   <div>3</div>
    // </div>
    <ThemeProvider theme={themeSelected === "light" ? themeLight : themeDark}>
      <>
        <GlobalStyle />
        <App onThemeChange={onThemeChange} />
      </>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
