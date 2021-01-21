import React from "react";
import { Global, css } from "@emotion/react";
import { defaultFontSize } from "./theme/variables";

import Signup from "./components/pages/Signup";
import Terms from "./components/pages/Terms";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: "Poppins", sans-serif;
    line-height: 26px;
    /* color: #fff; */
  }
  body {
    box-sizing: border-box;
    font-size: ${defaultFontSize};
    font-weight: 400;
  }
  html {
    font-size: 62.5%;
  }
`;

function App() {
  return (
    <Router>
      <Global styles={GlobalStyles} />

      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        {/* <Route path="*">
          <h1>Page Not Found!</h1>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
