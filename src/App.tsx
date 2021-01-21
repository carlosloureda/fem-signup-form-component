import React from "react";
import { Global, css } from "@emotion/react";
import Signup from "./components/pages/Signup";

const GlobalStyles = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
`;

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Signup />
    </>
  );
}

export default App;
